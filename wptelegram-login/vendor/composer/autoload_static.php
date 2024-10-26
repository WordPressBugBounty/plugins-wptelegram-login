<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit667d9c8baef128a1ab7bac2e14c8b73b
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
            $loader->prefixLengthsPsr4 = ComposerStaticInit667d9c8baef128a1ab7bac2e14c8b73b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit667d9c8baef128a1ab7bac2e14c8b73b::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit667d9c8baef128a1ab7bac2e14c8b73b::$classMap;

        }, null, ClassLoader::class);
    }
}
