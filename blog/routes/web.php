<?php

use App\Http\Controllers\ArticlesController;

Route::get("/", [ArticlesController::class,"index"]);