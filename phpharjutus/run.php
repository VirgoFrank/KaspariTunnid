<?php

use App\Cat;
use GuzzleHttp\Client;

require 'vendor/autoload.php';

$client = new Client();
$response = $client->get('http://google.com');
var_dump($response->getStatusCode());

$cat = new Cat();