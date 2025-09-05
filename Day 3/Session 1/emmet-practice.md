<!-- Before -->
!

<!-- After -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>

<!-- Before -->
ul>li*3

<!-- After -->
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>

<!-- Before -->
div#container>div.row*2>div.col*3
<!-- After -->
<div id="container">
  <div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
  <div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
</div>

<!-- Before -->
a[href="https://example.com" title="Example"]{Click Here}
<!-- After -->
<a href="https://example.com" title="Example">Click Here</a>

<!-- Before -->
form:post>input[type="text" name="username"
placeholder="Username"]+input[type="password" name="password"
placeholder="Password"]+button[type="submit"]{Login}

<!-- After -->
<form method="post">
  <input type="text" name="username" placeholder="Username" />
  <input type="password" name="password" placeholder="Password" />
  <button type="submit">Login</button>
</form>

<!-- Before -->
table>tr*2>td*3
<!-- After -->
<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

<!-- Before -->
br
<!-- After -->
<br />

<!-- Before -->
section#main>h1{Welcome}+p{This is a sample paragraph.}+img[src="image.jpg"
alt="Sample Image"]
<!-- After -->
<section id="main">
  <h1>Welcome</h1>
  <p>This is a sample paragraph.</p>
  <img src="image.jpg" alt="Sample Image" />
</section>

<!-- Before -->
nav>ul>li*4>a{Link $}
<!-- After -->
<nav>
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
    <li><a href="#">Link 4</a></li>
  </ul>
</nav>

<!-- Before -->
input:checkbox[name="subscribe" checked]+label{Subscribe to newsletter}
<!-- After -->
<input type="checkbox" name="subscribe" checked />
<label>Subscribe to newsletter</label>




