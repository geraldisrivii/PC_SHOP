<?php

use App\Filters\OrderFilter;
use App\Filters\ProductFilter;
use App\Filters\RestApiFilter;
use App\Filters\GroupedProductFilter;

ProductFilter::register();
GroupedProductFilter::register();
RestApiFilter::register();
OrderFilter::register();