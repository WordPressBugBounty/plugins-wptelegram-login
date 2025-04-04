<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1f5b8eb3b9683acdb6f5990a8f4c8861
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WPSocio\\WPUtils\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WPSocio\\WPUtils\\' => 
        array (
            0 => __DIR__ . '/..' . '/wpsocio/wp-utils/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1f5b8eb3b9683acdb6f5990a8f4c8861::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1f5b8eb3b9683acdb6f5990a8f4c8861::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1f5b8eb3b9683acdb6f5990a8f4c8861::$classMap;

        }, null, ClassLoader::class);
    }
}
