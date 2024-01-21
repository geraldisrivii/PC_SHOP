
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