<?php

function getProductProp(WC_Product|int $product, string $taxonomy_item_slug)
{
    if (gettype($product) == 'integer') {
        $product = new WC_Product($product);
    }

    $productProps = CFS()->get('properties', $product->get_id());

    foreach ($productProps as $key => $prop) {
        foreach ($prop['key'] as $key => $value) {
            
            $term = get_term($value);

            if (!$term->slug == $taxonomy_item_slug) {
                return null;
            }

            return $prop['value'];

        }
    }
    return null;
}