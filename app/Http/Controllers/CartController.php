<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\category;
use App\Models\product;
use App\Models\User;
use App\Models\cart;

class CartController extends Controller
{
    
    public function CreateCart(Request $req){
        if (session()->has('id')) {
            $item=new cart;
            $item->product_id=$req->product_id;
            $item->quantity=$req->quantity;
            $item->customer_id=session()->get('id');
            $item->save();
            // return redirect()->route('cart');
            return Redirect::route('cart');
        }
        else {
            return redirect()->route('login.user');
        }
        
    }

    public function cart(){
        $cart=DB::table('product')->join('cart','cart.product_id','=','product.id')
        ->select(DB::raw('CAST(product.product_price AS SIGNED) as total_price'),'product.*','cart.*')        
        ->where('cart.customer_id',session()->get('id'))
        ->get();
        return Inertia::render('Frontend/Cart',[
            'cart'=>$cart
        ]);
    }

    public function CartDelete($id){
       $cartDelete=cart::findOrFail($id);        
       $cartDelete->delete();        
       return redirect()->back()->with('success', 'Cart item deleted successfully.');
    }

    public function CartClear()
    {
        $sessionId = session()->get('id'); 
        DB::table('cart')->where('customer_id', $sessionId)->delete();

        return redirect()->back()->with('success', 'All cart items removed successfully.');
    }
}
