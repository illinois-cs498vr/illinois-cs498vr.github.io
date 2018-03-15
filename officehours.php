<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head><meta charset="utf-8">
	<title>CS 498 VR</title>
	<meta name="description" content=""><meta name="author" content=""><meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="stylesheets/styles.css?v=1.0" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,700" rel="stylesheet" type="text/css" /><!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
	<link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
</head>
<body>
<main class="wrapper">
<header>
<div id="class-branding">
<h3>CS 498VR<br />
Spring 2018</h3>
</div>
<?php include 'main-navigation.php'; ?></header>

<div id="content-area">
<div id="cs-header">			<p></p>
<h2>CS 498: Virtual Reality</h2>
</div>

<div id="content">
<h1>Office Hours</h1>

<iframe src="https://calendar.google.com/calendar/embed?src=hb85tj8o6pvajbdkvd0drhsge8%40group.calendar.google.com&ctz=America/Chicago" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>

</div>
<!--content--></div>
<!--content-area--><?php include 'footer.php'; ?></main>
</body>
<script>(function(){(function n(e) {
                    function t(e) {
                        if (e.parentNode) if (e.childNodes.length > 1) {
                            for (var t = document.createDocumentFragment(); e.childNodes.length > 0; ) {
                                var n = e.childNodes[0];
                                t.appendChild(n);
                            }
                            e.parentNode.replaceChild(t, e);
                        } else e.firstChild ? e.parentNode.replaceChild(e.firstChild, e) : e.parentNode.removeChild(e);
                    }
                    function n(e) {
                        if (e) try {
                            for (var n = e.querySelectorAll(".gr_"), r = n.length, o = 0; r > o; o++) t(n[o]);
                        } catch (i) {}
                    }
                    function r(e) {
                        try {
                            Object.defineProperty(e, "innerHTML", {
                                get: function() {
                                    try {
                                        var t = e.ownerDocument.createRange();
                                        t.selectNodeContents(e);
                                        var r = t.cloneContents(), o = document.createElement("div");
                                        return o.appendChild(r), n(o), o.innerHTML;
                                    } catch (i) {}
                                },
                                set: function(t) {
                                    try {
                                        var n = e.ownerDocument.createRange();
                                        n.selectNodeContents(e), n.deleteContents();
                                        var r = n.createContextualFragment(t);
                                        e.appendChild(r);
                                    } catch (o) {}
                                }
                            });
                        } catch (t) {}
                    }
                    if (e) {
                        var o = e.cloneNode;
                        e.cloneNode = function(t) {
                            var i = o.call(e, t);
                            if (e.classList.contains("mceContentBody")) i.innerHTML = e.innerHTML, n(i); else try {
                                r(i);
                            } catch (a) {}
                            return i;
                        }, r(e);
                    }
                })(document.querySelector("[data-gramm_id='ef96dc3c-1bec-cdbb-7bf8-ec107a7861a3']")) })()</script></html>
