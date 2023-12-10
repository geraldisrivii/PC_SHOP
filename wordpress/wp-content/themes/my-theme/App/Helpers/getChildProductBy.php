<?php

function getChildProductBy(string $category_slug, WC_Product $groped_product)
{
    if ($groped_product->has_child()) {
        $products = $groped_product->get_children();

        $products = array_map(function ($id) {
            return new WC_Product($id);
        }, $products);

        foreach ($products as $key => $product) {

            // Получаем категории для определения типа продукта (cpu)
            $categories = get_the_terms($product->get_id(), 'product_cat');
            $categories = array_map(function ($category) {
                return $category->slug;
            }, $categories);

            // Вложенный продукт является процессором
            if (in_array($category_slug, $categories)) {
                return $product;
            }
        }
    }

    return null;
}