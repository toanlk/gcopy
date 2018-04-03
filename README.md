# gcopy
A small chrome extension help you to replace and fill your template text.

If you install the package of laravel-dompdf, you can easily convert the contents described in English only into PDF, but you can not create Japanese PDF with the default settings just after package installation. When creating Japanese PDF, only the Japanese part garbled.

* Please refer to the previous article below for the installation method of laravel-dompdf and easy operation confirmation.

Reference article: I want to make PDF easily in the Laravel environment

Also, dompdf which is the core part of PDF creation has been uploaded from version 6 to version 7, and several updates including the Japanese font setting method are done.

Major changes from version 6 are listed in the release notes below. https://github.com/dompdf/dompdf/releases

In previous versions, load_font.php used to install new fonts is not included in the latest package, so you need to download the load_font.php file separately from laravel-dompdf.

The release notes also show how to use font-face to install fonts, but here we will show you how to create PDF in Japanese using load_font.php that was used in previous versions I will do.

[Caution] Since we could not find the correct procedure, we confirmed that Japanese fonts can be used by repeating trial and error. I think that there is also a more appropriate method, so I think that you can refer to the reference degree that there is such a method.

To environment that can use Japanese fonts at load_font.php

(1) Font Download
For Japanese fonts, I use IPA Gothic. I downloaded from the following URL.
http://ipafont.ipa.go.jp/old/ipafont/download.html
After downloading as a zip file, please unpack the zip file and save ipag.ttf in the appropriate place.

(2) Download load_font.php
Since load_font.php file is not attached to dompdf version 7, it needs to be downloaded from the following URL.
https://github.com/dompdf/utils
Save the downloaded load_font.php file under / vendor / dompdf / dompdf /.

(3) Install fonts using load_font.php
When load_font.php is executed, there is no php-font-lib and php-svg-lib directories in the / vendor / dompdf / dompdf / lib directory listed in autoload.inc.php which is read first in the loading, so it becomes an error Become.
These two directories are stored in the / vendor / phenx directory rather than the lib directory when installing the dompdf package, so copy these two directories under / vendor / dompdf / dompdf / lib / .
php-font-lib: This library is used when you use something other than the default font in dompdf like Japanese fonts.
php-svg-lib: library used to render SVG
In the lib directory, execute load_font.php by confirming that there are three html5lib, php-font-lib, and php-svg-lib that are required in autoload.inc.php.

# php load_font.php ipag $ path_to_font_ directory / ipag.ttf
* $ Path_to_font_directory is the directory where ipag.ttf file was saved in (2)
Unable to find bold face file.
Unable to find italic face file.
Unable to find bold_italic face file.
Copying $ path_to_font_directory / ipag.ttf to $ laravel_install_directory /vendor/dompdf/dompdf/lib/fonts/ipag.ttf ...
Generating Adobe Font Metrics for $ laravel_install_directory / vendor / dompdf / dompdf / lib / fonts / ipag ...
If the font installation is done normally as shown in the log output after running load_font.php above, ipag.ttf is copied under / vendor / dompdf / dompdf / lib / fonts / and ipag.ufm is created It will be.

Also, you can check that ipag information has been added to dompdf_font_family_cache.php.
'ipag' => array (
    'normal' => $ fontDir. '/ ipag',
    'bold' => $ fontDir. '/ ipag',
    'italic' => $ fontDir. '/ ipag',
    'bold_italic' => $ fontDir. '/ ipag',
  ),
(4) Create fonts folder
Create a fonts folder under / storage / directory.
Copy the file under / vendor / dompdf / dompdf / lib / fonts / to the created folder.

# cp lib / fonts / * / storage / fonts /
With this, the environment for using Japanese fonts is in place.