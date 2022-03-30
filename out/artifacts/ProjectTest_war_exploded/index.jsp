<%--
  Created by IntelliJ IDEA.
  User: dongha
  Date: 2022-03-25
  Time: 오후 6:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>$Title$</title>
    <link href="CssTest.css" rel="stylesheet">
</head>
<body>
<div class="exchange-box">
    <div class="dropdown">
        <button class="dropbtn" id="from-button">USD</button>
        <div class="dropdown-content" id="from-currency-list">
            <a href="#">USD</a>
            <a href="#">KRW</a>
            <a href="#">VND</a>
        </div>
    </div>
    <div class="input-area">
        <input type="number" id="from-input" onkeyup="convert()"/>
        <div>달러</div>
    </div>
</div>

<h1> = </h1>

<div class="exchange-box">
    <div class="dropdown">
        <button class="dropbtn" id="to-button">USD</button>
        <div class="dropdown-content" id="to-currency-list">
            <a href="#">USD</a>
            <a href="#">KRW</a>
            <a href="#">VND</a>
        </div>
    </div>
    <div class="input-area">
        <input type="number" id="to-input"/>
        <div>달러</div>
    </div>
</div>
<script src="Test.js"></script>
</body>
</html>


