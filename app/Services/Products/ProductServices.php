<?php

namespace App\Services\Products;

use App\Models\Menu;
use App\Models\Product;

class ProductServices
{
    public function getParrent()
    {
        return Menu::where('active', 1)->get();
    }

    public function getAll()
    {
        return Product::with('menu')->select('id', 'name', 'menu_id', 'thumb', 'active')
            ->orderByDesc('id')->paginate(5);
    }
}
