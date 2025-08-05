<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\category;

class CategoryController extends Controller
{
    public function category(){
        return Inertia::render('Admin/Category');
    }

    public function CreateCategory(Request $req){
        $req->validate([
            "category_name"=>"required",
            "category_description"=>"required",
            "category_image"=>"required|mimes:png,jpg,jpeg|max:50000",
        ]);

        $category=new category();
        $categoryImage=$req->file('category_image')->getClientOriginalName();
        $req->file('category_image')->move(public_path('images/'),$categoryImage);

        $category->category_name=$req['category_name'];
        $category->category_description=$req['category_description'];
        $category->category_image=$categoryImage;
        $category->save();

        return redirect()->back()->with('success','category created successfully!');
    }

    public function categoryList(){
        $category=category::latest()->get();
        return Inertia::render('Admin/CategoryList',[
            'category'=>$category,
        ]);
    }

    public function categoryDelete($id){
        $category=category::findOrFail($id);
        $imagepath=public_path('images/'.$category->category_image);
        if (file_exists($imagepath)) {
            unlink($imagepath);
        }
        $category->delete();

        return redirect()->back()->with('danger','category successfully deleted');
    }

    public function categoryEdit($id)
    {        
        $category = category::findOrFail($id);
    
        return Inertia::render('Admin/CategoryEdit', [
            'category' => $category,
        ]);
    }

    public function categoryUpdate(Request $req,$id){
        $req->validate([
            "category_name"=>"required",
            "category_description"=>"required",
            "category_image"=>"required|mimes:png,jpg,jpeg|max:50000",
        ]);

        $category=category::findOrFail($id);

        if ($req->hasFile('category_image')) {            
            $oldImage = public_path('images/' . $category->category_image);
            if (file_exists($oldImage)) {
                unlink($oldImage);
            }
            $categoryImage=$req->file('category_image')->getClientOriginalName();
            $req->file('category_image')->move(public_path('images/'),$categoryImage);
        }

        $category->category_name=$req['category_name'];
        $category->category_description=$req['category_description'];
        $category->category_image=$categoryImage;
        $category->save();

        return redirect()->route('category.list')->with('success','category created successfully!');
    }
}
