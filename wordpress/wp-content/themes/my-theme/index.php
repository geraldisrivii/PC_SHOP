<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            visibility: hidden;
            z-index: 9999;
            opacity: 0;
            transition: all 0.2s ease-in-out;
            background-color: #1C1C1C;
        }

        .preloader__image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            object-fit: contain;
        }

        .preloader--active {
            visibility: visible;
            opacity: 1;
        }
    </style>
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () {(m[i].a = m[i].a || []).push(arguments)};
            m[i].l = 1 * new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) {return;} }
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(96548842, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true
        });
    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/96548842" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->
    <?= wp_head() ?>
</head>

<body>
    <div id="app"></div>
    <div class="preloader">
        <img class="preloader__image" src="<?= CFS()->get('general_preloader-icon', 25) ?>"
            alt="general_preloader-icon">
    </div>
    <?= wp_footer() ?>
</body>


</html>