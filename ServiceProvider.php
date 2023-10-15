<?php

namespace QuantaForge\TextEditor;

class ServiceProvider extends \QuantaForge\Support\ServiceProvider
{

    public function boot()
    {
        $this->publishes(
            [
                __DIR__ . '/texteditor.js' => public_path('vendor/quantaforge/quantaforge-texteditor/texteditor.js'),
                __DIR__ . '/config.js' => public_path('vendor/quantaforge/quantaforge-texteditor/config.js'),
                __DIR__ . '/styles.js' => public_path('vendor/quantaforge/quantaforge-texteditor/styles.js'),
                __DIR__ . '/contents.css' => public_path('vendor/quantaforge/quantaforge-texteditor/contents.css'),
                __DIR__ . '/adapters' => public_path('vendor/quantaforge/quantaforge-texteditor/adapters'),
                __DIR__ . '/lang' => public_path('vendor/quantaforge/quantaforge-texteditor/lang'),
                __DIR__ . '/skins' => public_path('vendor/quantaforge/quantaforge-texteditor/skins'),
                __DIR__ . '/plugins' => public_path('vendor/quantaforge/quantaforge-texteditor/plugins'),
            ],
            'texteditor'
        ); 
    }

    public function register()
    {

    }
}
