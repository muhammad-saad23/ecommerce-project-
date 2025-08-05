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

class ProductController extends Controller
{
    public function product(){
        $categories=category::all();
        return Inertia::render('Admin/Product',[
            'categories'=>$categories
        ]);;
    }

    public function CreateProduct(Request $req){
        $req->validate([
            "product_name"=>"required",
            "product_price"=>"required",
            "category_name"=>"required|exists:category,id",
            "product_description"=>"required",
            "product_image"=>"required|mimes:png,jpg,jpeg|max:50000",
            "product_stock"=>"required|integer|min:0",
        ]);

        $product=new product();
        $productImage=$req->file('product_image')->getClientOriginalName();
        $req->file('product_image')->move(public_path('images/'),$productImage);

        $product->product_name=$req['product_name'];
        $product->product_price=$req['product_price'];
        $product->category_id=$req['category_name'];
        $product->product_description=$req['product_description'];
        $product->product_stock=$req['product_stock'];
        $product->product_image=$productImage;
        $product->save();

        return redirect()->back()->with('success','product created successfully!');
    }

    public function productList()
    {
        $products = product::join('category','product.category_id','=','category.id')
        ->select('product.*','category.category_name')
        ->latest()
        ->get();
        return Inertia::render('Admin/ProductList', [
            'products' => $products
        ]);
    }

    public function productDelete($id){
        $product=product::findOrFail($id);
        $imagepath=public_path('images/'.$product->product_image);
        if (file_exists($imagepath)) {
            unlink($imagepath);
        }
        $product->delete();

        return redirect()->back()->with('danger','Product successfully deleted');
    }
    
    public function productEdit($id)
    {
        // Fetch the product with category_name using a join and where clause
        $product = Product::join('category', 'product.category_id', '=', 'category.id')
            ->select('product.*', 'category.category_name')
            ->where('product.id', $id)
            ->firstOrFail();
    
        // Fetch all categories for the dropdown
        $categories = Category::select('id', 'category_name')->get();
    
        return Inertia::render('Admin/ProductEdit', [
            'product' => $product,
            'categories' => $categories,
        ]);
    }
    

    public function productUpdate(Request $req,$id){
        $req->validate([
            "product_name"=>"required",
            "product_price"=>"required",
            "category_name"=>"required|exists:category,id",
            "product_description"=>"required|string|max:5000",
            "product_image"=>"required|mimes:png,jpg,jpeg|max:50000",
            "product_stock"=>"required|integer|min:0",
        ]);

        $product=product::join('category', 'product.category_id', '=', 'category.id')
        ->select('product.*', 'category.category_name')
        ->where('product.id', $id)
        ->findOrFail($id);
       
        if ($req->hasFile('product_image')) {
            // Delete old image
            $oldImage = public_path('images/' . $product->product_image);
            if (file_exists($oldImage)) {
                unlink($oldImage);
            }
            $productImage=$req->file('product_image')->getClientOriginalName();
            $req->file('product_image')->move(public_path('images/'),$productImage);
        }
        
        
        $product->product_name=$req['product_name'];
        $product->product_price=$req['product_price'];
        $product->product_description=$req['product_description'];
        $product->category_id=$req['category_name'];
        $product->product_stock=$req['product_stock'];
        $product->product_image=$productImage;
        
        $product->save();

        return redirect()->route('product.list')->with('success','product updated successfully!');
    }

}
