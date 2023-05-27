# proyecto_web
Proyecto de nuestra web de reparación de tablets
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profesor</title>
</head>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        flex-direction: column;
    }

    header {
        width: 100vw;
        height: 150px;
        background-color: #414141;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        color: #f2f2f2;
        font-size: 10px;
        text-shadow: rgba(0, 0, 0, 0.2) 0 5px;
        order: 1;
    }



    main {
        display: flex;
        margin: 50px auto;
        max-width: 800px;
        order: 2;
        background-color: gold;
        width: 100vw;
        height: 150px;
    }


    main {
        height: 70vh;
        background-color: white;
    }

    .main_container {
        display: flex;
        width: auto;
        height: 70vh;
        align-items: center;
        justify-content: space-evenly;
    }


    .pro {
        transition: 0.4s;
        transform: translateX(0);
        cursor: grab;
        color: #ffff;
        font-size: 80px;
    }

    .animated_word {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pro:hover {
        transform: translateY(-1rem);
        background: -webkit-linear-gradient(120deg, hsl(19, 90%, 52%), hsl(56, 100%, 50%));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .container {
        display: flex;
        justify-content: space-evenly;
    }

    .box {
        width: 500px;
        height: 500px;
        background-color: #f2f2f2;
        margin: 10px;
        transition: transform 0.3s ease;
        text-align: center;
        font-size: 40px;
    }

    .box:hover {
        transform: scale(1.2);
      text-decoration: underline;
    }

    @media only screen and (max-width: 500px) {
        .container {
            flex-direction: column;
            
        }
    }
</style>

<body>
    <header>
        <div class="animated_word">
            <div class="pro">P</div>
            <div class="pro">r</div>
            <div class="pro">o</div>
            <div class="pro">f</div>
            <div class="pro">e</div>
            <div class="pro">s</div>
            <div class="pro">o</div>
            <div class="pro">r</div>
        </div>
    </header>

    <main class="container">


        <div class="box">Mi Tablet</div>


        <div class="box">Tablets Alumnos</div>


        <div class="box">Crear Incidencia</div>
    </main>

    <footer>

    </footer>
</body>

</html>
