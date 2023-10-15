CKEditor Package
=====================

## Note

**This is NOT the official TEXTEDITOR package.**

[TEXTEDITOR officially has its own composer package since 2014](https://texteditor.com/blog/CKEditor-Supports-Bower-and-Composer/). Instead of using this package, we recommend you follow [the official CKEditor installation instructions with package managers](https://docs.texteditor.com/texteditor4/latest/guide/dev_package_managers.html#composer)

## Installation
### Set up package

```
composer require quantaforge/quantaforge-texteditor
```

### Add ServiceProvider

For QuantaForge 5.5+ you can skip this step. 

For QuantaForge 5.4 and earlier edit config/app.php, add the following file to `Application Service Providers` section.
```
QuantaForge\TextEditor\ServiceProvider::class,
```
### Publish the resources
```
php artisan vendor:publish --tag=texteditor
```
## Usage

Default way (initiate by name or id) :

```javascript
    <script src="/vendor/quantaforge/quantaforge-texteditor/texteditor.js"></script>
    <script>
        TEXTEDITOR.replace( 'article-texteditor' );
    </script>
```

Or if you want to initiate by jQuery selector :

```javascript
    <script src="/vendor/quantaforge/quantaforge-texteditor/texteditor.js"></script>
    <script src="/vendor/quantaforge/quantaforge-texteditor/adapters/jquery.js"></script>
    <script>
        $('textarea').texteditor();
        // $('.textarea').texteditor(); // if class is prefered.
    </script>
```

## File Uploader Integration

 Instead of using KCFinder, we recommend [quantaforge-filemanager](https://github.com/UniSharp/quantaforge-filemanager) for the file uploader integration for better quantaforge user access control and specific per user folders.
