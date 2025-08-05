<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\category;
use App\Models\product;
use App\Models\User;


class FrontendController extends Controller
{
    public function home(){
        $categories=category::latest()->get();        
        return Inertia::render('Frontend/Home',[
            'categories'=>$categories,
        ]);
    }

    public function productList(){
        $products = product::join('category','product.category_id','=','category.id')
        ->select('product.*','category.category_name')
        ->latest()
        ->get();
        return Inertia::render('Frontend/ProductListing',[
            'products'=>$products,
        ]);
    }
    
    public function productDetail($id){
        $product=product::FindOrfail($id);
        return Inertia::render('Frontend/ProductDetail',[
            'product'=>$product,
        ]);
    }

    
    public function search(Request $request)
    {
        $query = product::join('category','product.category_id','=','category.id')
        ->select('product.*','category.category_name')
        ->latest();

        // Filter by category if provided
        if ($request->filled('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        // Filter by search keyword if provided
        if ($request->filled('search')) {
            $query->where('product_name', 'like', '%' . $request->search . '%')
            ->orWhere('product_description', 'like', '%' . $request->search . '%')
            ->orWhere('category_name', 'like', '%' . $request->search . '%');
        }

        $products = $query->get();

        return Inertia::render('Frontend/Search', [
            'products' => $products,
            'search' => $request->search,
            'category_id' => $request->category_id,
        ]);
    }

    public function register(){
        return Inertia::render('Frontend/Register');
    }

    public function CreateRegister(Request $req){
        $req->validate([
            "name"=>"required",
            "email"=>"required|email",
            'phone' => 'required|string|min:10',
            "password"=>"required|confirmed",
            // "password_confirmation"=>"required",
        ]);

        $register=new User();
        $register->name=$req['name'];
        $register->role='customer';
        $register->email=$req['email'];
        $register->phone=$req['phone'];
        $register->password=$req['password'];

        if ($register->save()) {

            return Redirect::route('login.user');            
        }
    }

    public function login(){
        return Inertia::render('Frontend/Login');
    }

    public function CreateLogin(Request $req)
    {
        $req->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
    
        if (Auth::attempt($req->only('email','password'))) {
            $req->session()->regenerate();
    
            $user = Auth::user();
    
            session()->put('id',$user->id);
            session()->put('name',$user->name);
            session()->put('email',$user->email);
            session()->put('phone',$user->phone);
    
            return redirect()->route('home')->with('message', 'Login successful!');
        }
        return redirect()->back()->with('error', 'Invalid email or password.');
        
    }

    public function logout(){
        session()->forget('id');
        session()->forget('email');
        session()->forget('name');
        session()->forget('phone');
        // session()->forget('password');
        return redirect()->route('login.user');
    }

   
}

