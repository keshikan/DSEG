DSEG Font Family (v0.46)
====

## Overview

DSEG is a free font which imitate LCD Display (7SEG, 14SEG, Weather icons etc.).
DSEG have special features:

 - Includes the roman-alphabet and symbol glyphs.
 - Many types(over 50) are available.
 - Licensed under [SIL OPEN FONT LICENSE Version 1.1](http://scripts.sil.org/OFL). You can use DSEG for non-commercial and commercial purposes.

![DSEG Image](http://www.keshikan.net/img/DSEG_sample_github.png)

## Sample
![DSEG Sample Image](http://www.keshikan.net/img/DSEG_weather_sample.png)

## Usage

 - Colon and Space have same width.

   ![DSEG usage 1](http://www.keshikan.net/img/dseg_usage1.png)

 - Period has zero width.

   ![DSEG usage 2](http://www.keshikan.net/img/dseg_usage2.png)

 - All-off (Exclamation)

   ![DSEG usage 3](http://www.keshikan.net/img/dseg_usage3.png)

 - All-on ("8" or Tilda)

   ![DSEG usage 4](http://www.keshikan.net/img/dseg_usage4.png)

## Others

For more information, visit DSEG support page.

 - English:[https://www.keshikan.net/fonts-e.html](https://www.keshikan.net/fonts-e.html)
 - Japanese:[https://www.keshikan.net/fonts.html](https://www.keshikan.net/fonts.html)

## How to Install

### Download release binary

[release binary](https://github.com/keshikan/DSEG/releases)

### Build from source(*.sfd)

Install [FontForge](https://fontforge.github.io/en-US/) and [Google woff2](https://github.com/google/woff2), and type below.

     $ make

### Install in Ubuntu(18.04 or later)
    $ sudo apt-get install fonts-dseg
    
### Install from npm
    $ npm i dseg

## Changelog

 - [v0.46(2020-03-15)](https://github.com/keshikan/DSEG/releases/download/v0.46/fonts-DSEG_v046.zip)
    - Added "DEGREE SIGN"(U+00B0).
    - Added "LOW LINE"(U+005F) on DSEG7.
    - Fixed an issue where the period(U+002E) width was not zero.

 - [v0.45(2018-01-09)](https://github.com/keshikan/DSEG/releases/download/v0.45/fonts-DSEG_v045.zip)
    - Added makefile and build script. (Merged [#8](https://github.com/keshikan/DSEG/pull/8) [#9](https://github.com/keshikan/DSEG/pull/9) . Thanks to [alexmyczko](https://github.com/alexmyczko))

 - [v0.44(2018-01-02)](https://github.com/keshikan/DSEG/archive/v0.44.zip)
    - Modified colon character position for balancing in Italic style. See below.  
![DSEG v044](http://www.keshikan.net/img/dseg_mod_v044.png)
    - Added License metadata to *.ttf .
    - Changed file name of *.sfd to match it's font-name.
  
 - [v0.43(2017-08-15)](https://github.com/keshikan/DSEG/archive/v0.43.zip)
    - Added package.json and registerd npmjs.com. ([merged #5](https://github.com/keshikan/DSEG/pull/5). Thanks to [nils-werner](https://github.com/nils-werner))

 - [v0.42(2017-04-27)](https://github.com/keshikan/DSEG/archive/v0.42.zip)
    - Added WOFF2 file format.
    - Added [extended metadata block](https://www.w3.org/TR/WOFF/#Metadata)  to *.woff and *.woff2. 
  
 - [v0.41(2017-01-07)](https://github.com/keshikan/DSEG/archive/v0.41.zip)
    - Assigned all-segment-off status to exclamation mark(U+0021).

 - [v0.40(2017-01-06)](https://github.com/keshikan/DSEG/archive/v0.40.zip)
    - First released in Github.
    - Added weather icons "DSEGWeather".
    - The license has been changed to the [SIL OPEN FONT LICENSE Version 1.1](http://scripts.sil.org/OFL).
    
 - v0.1x-0.30(2014-09-07 to 2017-01-07)
    - Older version(not recommended).
    - The license is original, not OFL1.1. When use this, read the attached document please.
    - [Download v0.30](https://www.keshikan.net/archive/DSEG_v030.zip)

## License

- Any font files(*.ttf, *.woff, *.sfd) are licensed under the [SIL OPEN FONT LICENSE Version 1.1](http://scripts.sil.org/OFL)
