/*!
 * FABA v1.0.0
 * by Themeflection
 *
 * Author Website:
 * http://themeflection.com
 *
 * Copyright 2016 Themeflection
 */
!function (e) {
    "use strict";
    e.fn.faba = function (a) {
        function t() {
            da = pt.token, pa = pt.albumsTitle, ca = pt.albLimit, ua = pt.photosPerPage, fa = pt.showCaption, ba = pt.photoDesc, ha = pt.commentsLimit, ma = pt.commentsMore, va = pt.comments, ga = pt.photosLayout, xa = pt.fixedSize, ya = pt.photoWidth, wa = pt.photoHeight, ka = pt.skipAlbums, Ia = pt.skipPhotos, Ha = pt.albumWidth, La = pt.albumHeight, Aa = pt.photosContainerLoad, Ca = pt.lineLoad, Oa = pt.albumsScroll, Da = pt.photosSroll, Sa = pt.albumView, vt = {
                overlay: pt.css.overlay ? pt.css.overlay : "",
                viewAlbum: pt.css.viewAlbum ? pt.css.viewAlbum : "",
                viewAlbumHover: pt.css.viewAlbumHover ? pt.css.viewAlbumHover : "",
                buttons: pt.css.buttons ? pt.css.buttons : "",
                photosContainer: pt.css.photosContainer ? pt.css.photosContainer : "",
                preloaderCircle: pt.css.preloaderCircle ? pt.css.preloaderCircle : "",
                preloaderRotator: pt.css.preloaderRotator ? pt.css.preloaderRotator : ""
            }, Ta = pt.account, Ba = pt.albumsCount, Na = pt.albumAnimation, Fa = pt.albumsLoad, _a = pt.albumsLoadDuration, Pa = pt.photoAnimation, Ra = pt.albumsSort, gt = {
                image: pt.albumsHoverAnimations.image ? pt.albumsHoverAnimations.image : "dropDown",
                overlay: pt.albumsHoverAnimations.overlay ? pt.albumsHoverAnimations.overlay : "expand",
                button: pt.albumsHoverAnimations.button ? pt.albumsHoverAnimations.button : "shrink",
                badge: pt.albumsHoverAnimations.badge ? pt.albumsHoverAnimations.badge : "slideLeft",
                duration: {
                    image: pt.albumsHoverAnimations.duration && pt.albumsHoverAnimations.duration.image ? pt.albumsHoverAnimations.duration.image : 1e3,
                    overlay: pt.albumsHoverAnimations.duration && pt.albumsHoverAnimations.duration.overlay ? pt.albumsHoverAnimations.duration.overlay : 600,
                    button: pt.albumsHoverAnimations.duration && pt.albumsHoverAnimations.duration.button ? pt.albumsHoverAnimations.duration.button : 450,
                    badge: pt.albumsHoverAnimations.duration && pt.albumsHoverAnimations.duration.badge ? pt.albumsHoverAnimations.duration.badge : 650
                }
            }, xt = {
                overlay: pt.photoHoverAnimations.overlay ? pt.photoHoverAnimations.overlay : "expand",
                button: pt.photoHoverAnimations.button ? pt.photoHoverAnimations.button : "shrink",
                duration: {
                    image: pt.photoHoverAnimations.duration && pt.photoHoverAnimations.duration.image ? pt.photoHoverAnimations.duration.image : 1500,
                    overlay: pt.photoHoverAnimations.duration && pt.photoHoverAnimations.duration.overlay ? pt.photoHoverAnimations.duration.overlay : 650,
                    button: pt.photoHoverAnimations.duration && pt.photoHoverAnimations.duration.button ? pt.photoHoverAnimations.duration.button : 650
                }
            }, yt = {
                album: {"in": "", out: ""},
                photos: {"in": "", out: ""},
                albumsLoad: {"in": "", out: "", duration: _a},
                albumsHover: {
                    image: {"in": "", out: "", duration: gt.duration.image},
                    overlay: {"in": "", out: "", duration: gt.duration.overlay},
                    button: {"in": "", out: "", duration: gt.duration.button},
                    badge: {"in": "", out: "", duration: gt.duration.badge}
                },
                photoHover: {
                    image: {duration: xt.duration.image},
                    overlay: {"in": "", out: "", duration: xt.duration.overlay},
                    button: {"in": "", out: "", duration: xt.duration.button}
                }
            }, wt = {
                fadeDuration: pt.lightbox.fadeDuration ? pt.lightbox.fadeDuration : 500,
                fitImagesInViewport: pt.lightbox.fitImagesInViewport ? pt.lightbox.fitImagesInViewport : !0,
                positionFromTop: pt.lightbox.positionFromTop ? pt.lightbox.positionFromTop : 50,
                resizeDuration: pt.lightbox.resizeDuration ? pt.lightbox.resizeDuration : 700,
                showImageNumberLabel: pt.lightbox.showImageNumberLabel ? pt.lightbox.showImageNumberLabel : !0,
                wrapAround: pt.lightbox.wrapAround ? pt.lightbox.wrapAround : !1,
                maxWidth: pt.lightbox.maxWidth ? pt.lightbox.maxWidth : "",
                maxHeight: pt.lightbox.maxHeight ? pt.lightbox.maxHeight : "",
                disableScrolling: pt.lightbox.disableScrolling ? pt.lightbox.disableScrolling : !1,
                albumLabel: pt.lightbox.albumLabel ? pt.lightbox.albumLabel : "Image %1 of %2",
                alwaysShowNavOnTouchDevices: pt.lightbox.alwaysShowNavOnTouchDevices ? pt.lightbox.alwaysShowNavOnTouchDevices : !1
            }, kt = {
                albumsLoading: "function" == typeof pt.callbacks.albumsLoading ? pt.callbacks.albumsLoading : "",
                albumsLoaded: "function" == typeof pt.callbacks.albumsLoaded ? pt.callbacks.albumsLoaded : "",
                albumOpened: "function" == typeof pt.callbacks.albumOpened ? pt.callbacks.albumOpened : "",
                albumsNavigate: "function" == typeof pt.callbacks.albumsNavigate ? pt.callbacks.albumsNavigate : "",
                albumHovered: "function" == typeof pt.callbacks.albumHovered ? pt.callbacks.albumHovered : "",
                photosLoading: "function" == typeof pt.callbacks.photosLoading ? pt.callbacks.photosLoading : "",
                photosLoaded: "function" == typeof pt.callbacks.photosLoaded ? pt.callbacks.photosLoaded : "",
                photoChange: "function" == typeof pt.callbacks.photoChange ? pt.callbacks.photoChange : "",
                photosNavigate: "function" == typeof pt.callbacks.photosNavigate ? pt.callbacks.photosNavigate : "",
                photoHovered: "function" == typeof pt.callbacks.photoHovered ? pt.callbacks.photoHovered : ""
            }, Ma = pt.autoplay, Wa = pt.autoplaySpeed, Ua = pt.autoplayPauseText, ja = pt.autoplayResumeText, Qa = pt.cacheData, Xa = pt.cacheSpeed, Ya = pt.loadFromCache, $a = pt.appID, Za = pt.showPageNumbers, Ea = pt.singleAlbum, Ga = pt.debugging, Ja = pt.albumMarginHorizontal, Ka = pt.albumMarginVertical, et = pt.photoMarginHorizontal, at = pt.photoMarginVertical, tt = pt.fbLinkText, ot = pt.commentsFaces, it = pt.noCommentsText, nt = pt.lightboxlayout, rt = pt.correctPageNum, st = pt.albumsCachePath, lt = pt.metaCachePath
        }

        function o(e, a) {
            a || console.log(St.total + " API Calls Made"), e && console.log(e)
        }

        function i(e, a, t, o, i) {
            o ? (yt[t][o]["in"] = e, yt[t][o].out = a, yt[t][o].duration = i) : (yt[t]["in"] = e, yt[t].out = a)
        }

        function n(e, a, t) {
            var o;
            switch (e.duration && (o = e.duration), e.duration && e.duration[t] && (o = e.duration[t]), t ? e = e[t] : t = !1, e) {
                case"slideUp":
                    i("transition.slideUpIn", "transition.slideDownOut", a, t, o);
                    break;
                case"slideLeft":
                    i("transition.slideLeftIn", "transition.slideRightOut", a, t, o);
                    break;
                case"slideRight":
                    i("transition.slideRightIn", "transition.slideLeftOut", a, t, o);
                    break;
                case"slideDown":
                    i("transition.slideDownIn", "transition.slideUpOut", a, t, o);
                    break;
                case"slideUpLong":
                    i("transition.slideUpBigIn", "transition.slideDownBigOut", a, t, o);
                    break;
                case"slideLeftLong":
                    i("transition.slideLeftBigIn", "transition.slideRightBigOut", a, t, o);
                    break;
                case"slideRightLong":
                    i("transition.slideRightBigIn", "transition.slideLeftBigOut", a, t, o);
                    break;
                case"slideDownLong":
                    i("transition.slideDownBigIn", "transition.slideUpBigOut", a, t, o);
                    break;
                case"flipX":
                    i("transition.flipXIn", "transition.flipXOut", a, t, o);
                    break;
                case"flipY":
                    i("transition.flipYIn", "transition.flipYOut", a, t, o);
                    break;
                case"flipYBounce":
                    i("transition.flipBounceYIn", "transition.flipBounceYOut", a, t, o);
                    break;
                case"flipXBounce":
                    i("transition.flipBounceXIn", "transition.flipBounceXOut", a, t, o);
                    break;
                case"expand":
                    i("transition.expandIn", "transition.expandOut", a, t, o);
                    break;
                case"swoop":
                    i("transition.swoopIn", "transition.swoopOut", a, t, o);
                    break;
                case"whirl":
                    i("transition.whirlIn", "transition.whirlOut", a, t, o);
                    break;
                case"shrink":
                    i("transition.shrinkIn", "transition.shrinkOut", a, t, o);
                    break;
                case"bounce":
                    i("transition.bounceIn", "transition.bounceOut", a, t, o);
                    break;
                case"bounceDown":
                    i("transition.bounceDownIn", "transition.bounceDownOut", a, t, o);
                    break;
                case"bounceLeft":
                    i("transition.bounceLeftIn", "transition.bounceLeftOut", a, t, o);
                    break;
                case"bounceRight":
                    i("transition.bounceRightIn", "transition.bounceRightOut", a, t, o);
                    break;
                case"verticalBounce":
                    i("transition.bounceUpIn", "transition.bounceDownOut", a, t, o);
                    break;
                case"horizontalBounce":
                    i("transition.bounceLeftIn", "transition.bounceRightOut", a, t, o);
                    break;
                case"dropDown":
                    i("transition.perspectiveUpIn", "transition.perspectiveUpOut", a, t, o);
                    break;
                case"dropUp":
                    i("transition.perspectiveDownIn", "transition.perspectiveDownOut", a, t, o);
                    break;
                case"dropLeft":
                    i("transition.perspectiveLeftIn", "transition.perspectiveLeftOut", a, t, o);
                    break;
                case"dropRight":
                    i("transition.perspectiveRightIn", "transition.perspectiveRightOut", a, t, o);
                    break;
                case"swoop":
                    i("transition.swoopIn", "transition.swoopOut", a, t, o);
                    break;
                case"expand":
                    i("transition.expandIn", "transition.expandOut", a, t, o);
                    break;
                case"shrink":
                    i("transition.shrinkIn", "transition.shrinkOut", a, t, o);
                    break;
                case"HorizontalSlide":
                    "album" === a ? i("transition.expandIn", "transition.expandOut", a, t, o) : i("transition.slideLeftIn", "transition.SlideRightOut", a, t, o);
                    break;
                case"VerticalSlide":
                    "album" === a ? i("transition.expandIn", "transition.expandOut", a, t, o) : i("transition.slideUpIn", "transition.slideDownOut", a, t, o)
            }
        }

        function r() {
            n(Na, "album"), n(Pa, "photos"), n(Fa, "albumsLoad"), n(gt, "albumsHover", "image"), n(gt, "albumsHover", "overlay"), n(gt, "albumsHover", "button"), n(gt, "albumsHover", "badge"), n(xt, "photoHover", "overlay"), n(xt, "photoHover", "button")
        }

        function s() {
            lightbox.option({
                fadeDuration: wt.fadeDuration,
                alwaysShowNavOnTouchDevices: wt.alwaysShowNavOnTouchDevices,
                albumLabel: wt.albumLabel,
                disableScrolling: wt.disableScrolling,
                fitImagesInViewport: wt.fitImagesInViewport,
                maxWidth: wt.maxWidth,
                maxHeight: wt.maxHeight,
                positionFromTop: wt.positionFromTop,
                resizeDuration: wt.resizeDuration,
                showImageNumberLabel: wt.showImageNumberLabel,
                wrapAround: wt.wrapAround
            })
        }

        function l() {
            var a = 335 * ct.find(".fb-album").length;
            ct.find("#faba-inner").height(a), ct.find(".fb-album").each(function () {
                var a = e(this);
                if (0 != a.index()) {
                    var t = a.index(), o = ct.find(".fb-album").eq(t - 1).css("top");
                    o = parseInt(o, 10), a.css("top", o + 335)
                }
            })
        }

        function d(a) {
            void 0 === ft ? (null == !navigator.userAgent.match(/chrome/i) && (Ka += 5), ft = new Freewall("#faba-inner"), ft.reset({
                selector: ".fb-album",
                gutterX: Ja,
                gutterY: Ka,
                cellW: Ha,
                cellH: La,
                keepOrder: mt,
                fixSize: xa,
                onResize: function () {
                    if (ft.refresh(), e(window).width() > 400 && e(window).width() < 615) var a = setInterval(function () {
                        l();
                        var e = 335 * ct.find(".fb-album").length;
                        e == ct.find("#faba-inner").outerHeight() && clearInterval(a)
                    }, 100)
                },
                onBlockResize: function (e) {
                    var a = e.height;
                    ct.find(".fb-wrap").height(a - 35)
                }
            }), ft.fitWidth(), e(window).trigger("resize"), ft.prepend(a)) : ft.prepend(a)
        }

        function p(a, t, i, n, r) {
            var s = a;
            FB.api("/" + i + "/photos", {access_token: da, fields: "images", limit: 1}, function (a) {
                if (a.data && !a.error) {
                    a.data[0].images[5] && a.data[0].images[5].width > Ha ? s = a.data[0].images[5].source : a.data[0].images[4] && a.data[0].images[4].width > Ha ? s = a.data[0].images[4].source : a.data[0].images[3] && a.data[0].images[3].width > Ha ? s = a.data[0].images[3].source : a.data[0].images[2] && a.data[0].images[2].width > Ha ? s = a.data[0].images[2].source : a.data[0].images[1] && (s = a.data[0].images[1].source), e("#a" + i).find("img").attr("src", s);
                    {
                        var t = e("#a" + i);
                        t.parent().find("h4").outerHeight(!0) > 35 ? La - (t.parent().find("h4").outerHeight(!0) - 35) : La
                    }
                    t.height(ct.width() < 1280 ? La - 35 - Ka : La), Tt.current = Tt.current + 1, Ga && (St.total = St.total + 1, o("Thumb image for Album " + i + " has been successfully replaced!"))
                } else console.log(a.error)
            });
            var l = '<div class="fb-album hidden">';
            l += "<h4>" + t + "</h4>", l += '<div class="fb-wrap" id="a' + i + '"> 		    <img class="imgdiv" src="' + s + '" alt="' + t + '" /> 		    <span class="ovlpic"> 		      <a class="fbp-view" href="' + i + '">' + Sa + '</a> 		    </span> 		    <span class="badge">' + r + " Fotos</span> 		    </div>", l += "</div>", d(l), Ga && o("Album " + i + " successfully added!", !0)
        }

        function c(a, t, o, i, n, r) {
            if (e(o).not(":visible") && e(o).css("display", "inline-block"), e(i).not(":visible") && e(i).css("display", "inline-block"), r) {
                var s = parseInt(r.text(), 10);
                n = s, a = Ba;
                var l = e("#pagination");
                l.find('li[data-id="' + s + '"]').addClass("active").siblings().removeClass("active")
            }
            2 == a && "prev" === t ? e(o).css("display", "none") : "next" === t && e(o).not(":visible") && e(o).css("display", "inline-block"), 1 == n && e(o).css("display", "none"), a === n ? e(i).css("display", "none") : n > a && e(i).css("display", "inline-block"), 1 == a && (e(o).css("display", "none"), e(i).css("display", "none"))
        }

        function u() {
            var e, a;
            switch (ga) {
                case"flex":
                    e = ya + ya * Math.random() << 0, a = "";
                    break;
                case"photoAlbum":
                    ya = 320, wa = 320, e = 320, a = 320;
                    break;
                case"custom":
                    e = ya, a = wa
            }
            var t = {Width: e, Height: a};
            return t
        }

        function f(e, a) {
            ("album" === a && "HorizontalSlide" === Na || "photos" === a && "HorizontalSlide" === Pa) && ("next" === e ? i("transition.slideRightBigIn", "transition.slideLeftBigOut", a, !1) : i("transition.slideLeftBigIn", "transition.slideRightBigOut", a, !1)), ("album" === a && "VerticalSlide" === Na || "photos" === a && "VerticalSlide" === Pa) && ("next" === e ? i("transition.slideUpBigIn", "transition.slideDownBigOut", a, !1) : i("transition.slideUpBigIn", "transition.slideDownBigOut", a, !1))
        }

        function b(a) {
            if (!It[Va][a]) {
                var t = e("a[data-lightbox]").first().attr("href");
                Qa && (-1 == Dt.indexOf(t) ? Dt = t : (delete It[Va][a], a -= 1)), It[Va][a] = {
                    html: e(".fbp-container").html(),
                    next: void 0 != e("#phnx").attr("href") ? e("#phnx").attr("href") : "",
                    previous: void 0 != e("#phpr").attr("href") ? e("#phpr").attr("href") : "",
                    unique: t
                }, qa = a, Ct = !1
            }
        }

        function h(a) {
            Ht[a] || (Ht[a] = {
                html: e("#faba-inner").html(),
                next: void 0 != e("#aphnx").attr("href") ? e("#aphnx").attr("href") : "",
                previous: void 0 != e("#aphpr").attr("href") ? e("#aphpr").attr("href") : ""
            })
        }

        function m(a) {
            var t = bt[a];
            t = parseInt(t);
            var o = t / ua, i = Math.round(o), n = i * ua;
            return o > i && 500 > t && t > n && i++, 0 === i && (i = 1), !e.isEmptyObject(rt) && rt[a] && (i = rt[a]), i
        }

        function v(a, t) {
            var o;
            return o = "next" === t ? a + 1 : a - 1, "object" == typeof a && (o = e(".fb-first").text(), o = parseInt(o, 10)), o
        }

        function g() {
            ct.find(".fb-album h4").each(function () {
                var a = e(this);
                if (a.outerHeight(!0) > 35) {
                    var t = a.parent().find(".fb-wrap"), o = t.outerHeight(!0) - (a.outerHeight(!0) - 35);
                    t.height(o)
                }
            })
        }

        function x(e) {
            var a = e, t = a.find(".imgdiv").attr("src"), o = a.find(".imgdiv").attr("alt"),
                i = a.find(".fbp-view").attr("href"), n = a.find(".fbp-view").html(), r = a.find(".badge").html(),
                s = '<img class="imgdiv" src="' + t + '" alt="' + o + '" /> 		  	 <span class="ovlpic"> 		  	   <a class="fbp-view" href="' + i + '">' + n + '</a> 		  	 </span> 		  	 <span class="badge">' + r + " photos</span>";
            a.find(".fb-wrap").html(s)
        }

        function y() {
            "photoAlbum" === ga ? (ya = 320, wa = 320) : "flex" === ga && (ya = 220, wa = 240), void 0 === ut && (ut = new Freewall(".fbp-container")), ut.reset({
                selector: ".fb-pic",
                gutterX: et,
                gutterY: at,
                cellW: ya,
                cellH: wa,
                fixSize: xa,
                onResize: function () {
                    ut.fitWidth()
                }
            }), ut.fitWidth()
        }

        function w() {
            if (ka.length) {
                {
                    e(".fb-album")
                }
                e.each(ka, function (a, t) {
                    e("#a" + t).length && e("#a" + t).remove(), e('h4:contains("' + t + '")') && e('h4:contains("' + t + '")').closest(".fb-album").remove()
                }), ft.refresh()
            }
        }

        function k(a, t, o, i, n, r) {
            var s = e(".fbp-container").outerHeight(!0), l = e("#fb-breadcrumbs #fbpt").find(".fb-first"),
                d = parseInt(l.text()), p = e("#pagination"), c = p.find("li.active").data("id");
            c = c ? parseInt(c, 10) : parseInt(l.text(), 10), "prev" === o ? (l.text(d - 1), c--, "album" === a && ht--) : (l.text(d + 1), c++, "album" === a && ht++), e("#aphpr, #aphnx, .fb-top-nav").css("display", "none"), f(o, a), "photos" === a && It[Va] && It[Va][c] && n === !0 && (n = It[Va][c]), "albums" === a && h[c] && (n = h[c]), n === !0 && (n = !1), "photos" === a ? (V(t, l, d, o, i, s, n, r), "function" == typeof kt.photosLoading && kt.photosLoading(o)) : L(t, l, d, o, i, n), p.find('li[data-id="' + c + '"]').addClass("active").siblings().removeClass("active")
        }

        function I(a, t, i, n, r, s, l) {
            var d = e("#aphnx"), p = e("#aphpr"), u = v(i, r), f = l ? !0 : !1;
            e("#faba-inner .fb-album").velocity("stop").velocity(yt.album["in"], {
                stagger: 25, begin: function () {
                    e("#faba-inner .fbp-overlay").remove(), e("#faba-inner .fb-album").removeClass("hidden")
                }, complete: function () {
                    ft.refresh(), e("body").css("overflow-x", ""), Qa && e(".fb-album").addClass("hidden"), l && l.previous && p.attr("href", l.previous), l && l.next && d.attr("href", l.next), h(i + 1), Qa && e("#faba-inner .fb-album").removeClass("hidden"), Ga && o("All Albums on page (" + u + ") have been successfully loaded.", !0), "function" == typeof kt.albumsLoaded && kt.albumsLoaded(u, r, f), Ct = !1, g()
                }
            }), Oa !== !1 && e("#fb-breadcrumbs").velocity("scroll", {duration: Oa}), c(i, r, "#aphpr", "#aphnx", s, n), t.fadeIn(360)
        }

        function H(a, t, o, i, n, r, s) {
            s && (ft.prepend(s.html), ka.length > 0 && w(), e(".fb-wrap").each(function () {
                var a = e(this), t = a.attr("id");
                t = t.replace("a", "");
                var o = a.find(".badge").text();
                o = parseInt(o, 10), bt[t] = o, a.parent().hasClass("active") && (a.parent().removeClass("active"), x(a.parent()))
            })), e("#faba-inner .imgdiv").waitForImages(!0).done(function () {
                I(a, t, o, i, n, r, s)
            })
        }

        function L(a, t, i, n, r, s) {
            Ct = !0, bt.photos = 0;
            var l = e("#faba-inner").outerHeight(!0), d = e("#fbp-navs");
            d.fadeOut(360);
            var c = v(i, n), u = e("#aphnx"), f = e("#aphpr");
            "function" == typeof kt.albumsLoading && kt.albumsLoading(c, n), e("#faba-inner .fb-album").velocity(yt.album.out, {
                stagger: 35,
                complete: function () {
                    e("body").css("overflow-x", "hidden"), e("#faba-inner .fb-album").remove(), e("#faba-inner").append('<div class="fbp-overlay" style="height: ' + l + 'px"><div class="tb-preloader-wave"></div></div>'), s ? (Ga && (St.total = St.total + 0, o("Albums <<" + n + ">> page (" + ("next" === n ? i + 1 : i - 1) + ") loaded.")), H("", d, i, t, n, r, s)) : FB.api(a, {fields: "id, name, description, count, cover_photo"}, function (a) {
                        if (a && !a.error) {
                            var r = 0, s = a.data.length;
                            Ga && (St.total = St.total + 1, o("Albums <<" + n + ">> page (" + c + ") loaded.")), e.each(a.data, function (l, c) {
                                -1 == ka.indexOf(c.id) && -1 == ka.indexOf(c.name) ? FB.api("/" + c.id + "/picture", {access_token: da}, function (l) {
                                    if (Ga && (St.total = St.total + 1, o("Album " + c.id + " cover picture loaded.")), c.count > 0) {
                                        Tt.total = Tt.total + 1, p(l.data.url, c.name, c.id, c.description, c.count, c.cover_photo);
                                        var b = c.id, h = c.count;
                                        bt[b] = h, bt.photos = bt.photos + h
                                    }
                                    if (a && a.paging.previous && f.attr("href", a.paging.previous), a && a.paging.next && u.attr("href", a.paging.next), r++, r === s) var m = (e("#faba-inner"), setInterval(function () {
                                        Tt.total === Tt.current && (clearInterval(m), H(a, d, i, t, n, s))
                                    }, 100))
                                }) : r++
                            })
                        } else console.log(a.error), e(".fbp-overlay").append("<h3>" + a.error.message + "</h3>")
                    })
                }
            })
        }

        function A(a, t, o, i) {
            var n = e("#fbp-navs"), r = o.paging && o.paging.next ? o.paging.next : o.next;
            e("#phnx").attr("href", r), e("#phnx, #phpr").off().on("click", {i: a}, G), o.paging && y(), (o.paging && o.paging.next || o.next) && bt[a] > ua && (e("#phnx").velocity("fadeIn", {duration: 150}), J(i), n.fadeIn(360))
        }

        function C(a, t, i) {
            e(".fbp-overlay").css("height", t.outerHeight(!0)), t.find(".imgdiv").waitForImages(!0).done(function () {
                var n = e("#fb-breadcrumbs").find(".fb-first"), r = parseInt(n.text());
                t.find("a").velocity(yt.photos["in"], {
                    stagger: 26, begin: function () {
                        e(this).find(".hidden").removeClass("hidden"), t.find(".fbp-overlay").remove(), Da !== !1 && e("#fb-breadcrumbs").velocity("scroll", {duration: Da}), It[a] || (It[a] = {}), Va = a, b(r)
                    }, complete: function () {
                        var e = i ? !0 : !1;
                        Ct = !1, Ga && o("Album " + a + " Bilder sind bereit.", !0), "function" == typeof kt.albumOpened && kt.albumOpened(a), "function" == typeof kt.photosLoaded && kt.photosLoaded(r, e)
                    }
                })
            })
        }

        function O() {
            if (Ht[Ea]) {
                var a = Ht[Ea][count];
                bt[Ea] = a, D(Ea)
            } else FB.api("/" + Ea, {fields: "count", access_token: da}, function (a) {
                if (a && !a.error) {
                    if (Ga && (St.total = St.total + 1, o("Single Album " + Ea + " fetched.")), a.count > 0) {
                        var t = a.count;
                        bt[Ea] = t, D(Ea)
                    }
                } else console.log(a.error), e(".fbp-overlay").append("<h3>" + a.error.message + "</h3>")
            })
        }

        function D(a) {
            (Ma && Qa && Xa / 2 > Ma || Ma && Wa / 2 > Ma) && (window.clearInterval(Ma), Ma = window.setInterval(F, Xa)), a.type && a.preventDefault();
            var t = e(this);
            a.type || (t = a);
            var i = Ea ? Ea : t.attr("href"), n = e(".fbp-container"), r = e("#fb-photos"),
                s = Ea ? "" : t.closest(".fb-album").find("h4").text(), l = s ? '<h5 class="brk">' + s + "</h5>" : "",
                d = e("#fbp-navs"), r = e("#fb-photos");
            r.css("display", "block"), Ea || e(l).insertBefore("#fb-breadcrumbs #fbpt"), e("#fb-breadcrumbs #fbpt .fb-first").text(1), e("#aphnx,#aphpr, .fb-top-nav").css("display", "none"), "function" == typeof kt.photosLoading && kt.photosLoading(1, !1), d.fadeOut(360);
            var p = Ca / 4, c = [{
                elements: e("#faba-inner"),
                properties: yt.albumsLoad.out,
                options: {duration: yt.albumsLoad.duration}
            }, {elements: n, properties: {width: "20%"}, options: {sequenceQueue: !1, duration: p}}, {
                elements: n,
                properties: {width: "30%"},
                options: {duration: p}
            }, {elements: n, properties: {width: "50%"}, options: {duration: p}}, {
                elements: n,
                properties: {width: "100%"},
                options: {duration: p}
            }, {
                elements: n, properties: {height: "100%", top: 90}, options: {
                    duration: Aa, complete: function () {
                        n.css({
                            position: "relative",
                            padding: 15,
                            margin: "auto",
                            left: 0,
                            top: 0
                        }), n.append('<div class="fbp-overlay" style="background: ' + n.css("background-color") + ";height: " + n.outerHeight(!0) + 'px"><div class="tb-preloader-wave"></div></div>'), It[i] ? (y(), ut.prepend(It[i][1].html), A(i, r, It[i][1], u), C(i, n, !0)) : setTimeout(function () {
                            FB.api("/" + i + "/photos", {
                                fields: "images,name",
                                access_token: da,
                                limit: ua
                            }, function (a) {
                                a && !a.error ? (Ga && (St.total = St.total + 1, o("Album " + i + " photos fetched.")), r.find(".fb-pic").remove(), r.find("#load-more").remove(), e.each(a.data, function (e, t) {
                                    -1 == Ia.indexOf(t.id) && q(t, a)
                                }), C(i, n), A(i, r, a, u)) : (console.log(a.error), e(".fbp-overlay").append("<h3>" + a.error.message + "</h3>"))
                            })
                        }, 30)
                    }
                }
            }];
            e.Velocity.RunSequence(c);
            var u = m(i);
            e("#fb-breadcrumbs #fbpt .fb-total").text(u)
        }

        function S(a) {
            var t = e(".fb-total").text(), o = e(".fb-first").text();
            t = parseInt(t, 10), o = parseInt(o, 10);
            var i = {pages: t, paged: o};
            return i[a]
        }

        function T() {
            var a = e(".fbaply"), t = Ua;
            a.hasClass("active") ? (a.removeClass("active"), window.clearInterval(Ma), t = ja, Ct = !0, Ma = !1) : (a.addClass("active"), Ct = !1, Ma = window.setInterval(F, Wa)), a.text(t)
        }

        function B(a) {
            var t, o = e("#faba-inner").find(".fb-album.active").last(), i = a.first();
            if (i.hasClass("active")) {
                var n = o.index();
                if (Bt.album.out(o), t = a.eq(n + 1), t.hasClass("active") || a.eq(n).index() == a.last().index()) {
                    var r = S("pages"), s = S("paged");
                    if (r > 1) {
                        {
                            var l = e("#aphnx");
                            e("#aphpr")
                        }
                        return r > s ? void E(l) : void K(1, !0)
                    }
                    a.removeClass("active"), i.addClass("active"), t = i
                } else t.addClass("active")
            } else i.addClass("active"), t = i;
            Qa && (Va = t.find(".fb-wrap").attr("id").replace("a", ""), _()), Bt.album.over(t), setTimeout(function () {
                var e = t.find(".fbp-view");
                Ct = !0, D(e)
            }, gt.duration.image)
        }

        function R() {
            var a = e("a[data-lightbox]").eq(0), t = e("a[data-lightbox]").length;
            if ("block" === e("#lightbox").css("display")) {
                var o = e("a.active[data-lightbox]");
                if (o.index() < t - 1) {
                    var i = e("a[data-lightbox]").eq(o.index() + 1);
                    i.addClass("active").siblings().removeClass("active"), lightbox.changeImage(i.index()), Z(i.data("id"))
                } else lightbox.end(), At = 3
            } else a.addClass("active"), lightbox.start(a), Z(a.data("id"))
        }

        function N() {
            var a = S("pages"), t = S("paged");
            if (a > 1) if (a > t) {
                var o = e("#pagination"), i = o.find("li.active").data("id");
                i = parseInt(i, 10);
                var n = i + 1;
                K(n, !0)
            } else U(); else U()
        }

        function F() {
            var a = e("#faba-inner"), t = e("#fb-photos"), o = a.find(".fb-album"), i = t.find("a[data-lightbox]");
            Ct === !1 && (o.length && "none" != a.css("display") ? B(o) : i.length && "none" != t.css("display") && (e("a.active[data-lightbox]").length > 0 || (At = 2), 2 === At ? R() : 3 === At && N()))
        }

        function _() {
            if (Qa && "done" === Ot) {
                var a = '<div class="fbpdone-ovl"><div class="done-inner"><h3>Paste This Data To The albums.json file</h3><textarea class="fbpdone"></textarea></div></div>',
                    t = '<div class="done-inner"><h3>Paste This Data To The photo_meta.json file</h3><textarea class="fbpmdone"></textarea></div>';
                ct.append(a), a = e(".fbpdone"), Lt && (e("#faba-caching").remove(), e(".fbpdone-ovl").append(t), t = e(".fbpmdone"), t.text(JSON.stringify(Lt)), t.on("click", function () {
                    e(this).select()
                }), Ct = !0, window.clearInterval(Ma), ct.faba.destroy(!1, !0)), It.albums = Ht, a.text(JSON.stringify(It)), a.on("click", function () {
                    e(this).select()
                })
            } else if (Qa) {
                var o = S("pages"), i = S("paged");
                o === i && e("#a" + Va).parent().index() == e(".fb-album").last().index() && (Ot = "done")
            }
        }

        function P(a) {
            if ("meta" === a) var t = lt + "photo_meta.json"; else var t = st + "albums.json";
            e.ajax({
                url: t, beforeSend: function (e) {
                    e.overrideMimeType && e.overrideMimeType("application/json")
                }, async: !0, dataType: "json", success: function (e) {
                    "meta" === a ? Lt = e : (It = e, Ht = e.albums)
                }
            })
        }

        function z(e) {
            for (var a, t = e.images, o = t.length, i = o - 1; i > 0; i--) t[i].width >= ya && t[i].width < ya + 360 && (a = t[i].source);
            return a
        }

        function q(a, t, i, n, r) {
            "" == a && (a = {images: {0: "", 1: {source: ""}, length: 2}, id: "", name: ""});
            var s = u(), l = e(".fbp-container"), d = (e("#fbp-navs").outerHeight(!0), s.Width), p = s.Height, c = z(a),
                f = "fb-pic";
            f += " fb-gal hidden";
            var h = '<span class="ovlpic"></span><b class="lupa"></b>',
                m = '<a href="' + a.images[0].source + '" data-id="' + a.id + '" data-lightbox="fbpics" data-title=""><div class="' + f + '" style="width: ' + d + "px; height: " + p + 'px"><img class="imgdiv" src="' + c + '" alt="' + (void 0 != a.name ? a.name.substr(0, 20) : "") + '" />' + h + "</div></a>";
            if (i) {
                ut.prepend(n ? n.html : m);
                var g = l.outerHeight(!0);
                l.find(".fbp-overlay").height(g), (t.data && i === t.data.length || n) && (ut.refresh(), l.find(".imgdiv").waitForImages(!0).done(function () {
                    l.find(".fbp-overlay").remove(), l.find(".hidden").removeClass("hidden"), l.find("a").velocity("stop").velocity(yt.photos["in"], {
                        stagger: 32,
                        complete: function () {
                            var e = n ? !0 : !1, a = v(l);
                            Ct = !1, n || b(r), Ga && o("Photos successfully loaded."), "function" == typeof kt.photosLoaded && kt.photosLoaded(a, e)
                        }
                    }).addClass("vis")
                }))
            } else l.append(m)
        }

        function V(a, t, i, n, r, s, l) {
            var d = 0, p = e("#fbp-navs"), u = e(".fbp-container"), s = u.outerHeight(!0);
            Ct = !0, p.fadeOut(360), e('<div class="fbp-overlay" style="background: ' + u.css("background-color") + ";visibility: hidden; height: " + s + 'px"><div class="tb-preloader-wave"></div></div>').appendTo(".fbp-container");
            var f = e(".fbp-overlay"), b = [{
                elements: f,
                properties: "transition.fadeIn",
                options: {duration: 360}
            }, {
                elements: e(".fbp-container").find("a"),
                properties: yt.photos.out,
                options: {
                    sequenceQueue: !1, stagger: 5, complete: function () {
                        f.css("visibility", "visible");
                        var t = e("#fb-breadcrumbs #fbpt").find(".fb-total").text(),
                            r = e("#fb-breadcrumbs #fbpt").find(".fb-first").text();
                        Da !== !1 && e("#fb-breadcrumbs").velocity("scroll", {duration: Da}), u.find("a").remove(), l ? (e("#phpr").attr("href", l.previous), e("#phnx").attr("href", l.next), c(t, n, "#phpr", "#phnx", r), p.fadeIn(360), q("", "", 1, l)) : FB.api(a, {fields: "images"}, function (a) {
                            a && !a.error ? (Ga && (St.total = St.total + 1, o("<<" + n + ">> " + ua + " photos  for page (" + ("next" === n ? i + 1 : i - 1) + ")  fetched.")), e.each(a.data, function (e, t) {
                                -1 == Ia.indexOf(t.id) ? (d++, q(t, a, d, !1, r)) : d++
                            }), e("#phpr").attr("href", a.paging.previous), e("#phnx").attr("href", a.paging.next), c(t, n, "#phpr", "#phnx", r), p.fadeIn(360)) : (console.log(a.error), e(".fbp-overlay").append("<h3>" + a.error.message + "</h3>"))
                        })
                    }
                }
            }];
            e.Velocity.RunSequence(b)
        }

        function M() {
            e("#faba").hoverIntent({
                over: function () {
                    var a = e(this);
                    Bt.photo.over(a)
                }, out: function () {
                    var a = e(this);
                    Bt.photo.out(a)
                }, selector: ".fbp-container a .fb-pic", interval: 60
            })
        }

        function W() {
            e("#faba-inner").hoverIntent({
                over: function () {
                    var a = e(this);
                    Bt.album.over(a)
                }, out: function () {
                    var a = e(this);
                    Bt.album.out(a)
                }, selector: ".fb-album .fb-wrap", interval: 45
            })
        }

        function U() {
            var a = e(".fbp-container"), t = e("#fb-photos");
            if (a.find("a").length > 0 && !Ea) {
                var o = e("#pagination");
                o.find("li").remove(), a.find("a").remove();
                var i = e("#fb-breadcrumbs"), n = e("#faba-inner");
                i.find(".brk").remove(), i.find("#fbpt .fb-first").text(ht), i.find("#fbpt .fb-total").text(Ba), e("#phpr, #phnx").css("display", "none"), a.css({
                    padding: 0,
                    width: "100%",
                    left: 0,
                    position: "absolute"
                }), a.velocity({height: 10}, {
                    duration: Aa, sequenceQueue: !1, complete: function () {
                        var o = [{elements: a, properties: {width: 0}, options: {duration: Ca}}, {
                            elements: n,
                            properties: yt.albumsLoad["in"],
                            options: {
                                duration: yt.albumsLoad.duration, complete: function () {
                                    t.css("display", "none");
                                    var a = e("#pagination");
                                    if (Oa !== !1 && i.velocity("scroll", {duration: Oa}), Ba > 1) {
                                        Ba > ht && e("#aphnx").css("display", "inline-block"), ht > 1 && e("#aphpr").css("display", "block"), J(Ba);
                                        var o = e(".fb-first").text();
                                        a.find('li[data-id="' + o + '"]').addClass("active").siblings().removeClass("active"), e("#fbp-navs").fadeIn(320)
                                    }
                                    setTimeout(function () {
                                        ft.refresh()
                                    }, 120)
                                }
                            }
                        }];
                        e.Velocity.RunSequence(o)
                    }
                })
            }
        }

        function j(a, t, i, n, r, s, l) {
            var d;
            if (i === !1 && n === !1) d = Lt[a + "-comments"]; else {
                var p = n.created_time, c = l ? '<img src="' + l.data.url + '" />' : "";
                p = p.split("T"), p = p[0], p = e.timeago(p), d = '<div class="fbp-com clearfix">' + c + '<p><span class="fbp-ct"><b>' + n.from.name + "</b><b>" + p + "</b></span>" + n.message + "</p></div>"
            }
            if (t.find(".lb-details .fbp-comms").append(d), r === s) {
                var u = t.find(".lb-details .fbp-comms").outerHeight(!0);
                if (Lt[a + "-comments"] || (Lt[a + "-comments"] = t.find(".lb-details .fbp-comms").html()), i === !1 && n === !1 || i.paging.next) {
                    var f;
                    f = i === !1 && n === !1 ? Lt[a + "-comments-more"] ? Lt[a + "-comments-more"] : "" : i.paging.next ? i.paging.next : "";
                    var b = '<a class="fbc-lm" href="' + f + '">' + ma + "</a>";
                    !Lt[a + "-comments-more"] && i && i.paging.next && (Lt[a + "-comments-more"] = i.paging.next), f && t.find(".fbp-comms").append(b), e("#lightboxOverlay").css("height", "+=" + (u + 15) + "px"), Ga && o("All comments successfully loaded and added to the photo " + a, !0)
                }
            }
        }

        function Q(a, t) {
            var i = 0, n = e("#lightbox");
            if (n.find(".fbp-comms .fbc-lm").length > 0 && n.find(".fbp-comms .fbc-lm").remove(), t !== !1) {
                var r = t.data.length;
                e.each(t.data, function (e, s) {
                    ot ? FB.api("/" + s.from.id + "/picture", {access_token: da}, function (e) {
                        e && !e.error ? (Ga && (St.total = St.total + 1, o("Profile image of the commenter (" + s.from.id + ") fetched.")), i++, j(a, n, t, s, i, r, e)) : console.log(e.error)
                    }) : (i++, j(a, n, t, s, i, r))
                })
            } else j(a, n, !1, !1, 1, 1)
        }

        function X(a, t) {
            Lt[a + "-comments"] ? Q(a, !1) : FB.api(t ? "/" + a + "/comments" : a, {
                fields: "from, message, created_time",
                limit: ha,
                access_token: da
            }, function (t) {
                t && !t.error ? t.data.length ? (Ga && (St.total = St.total + 1, o("Comment data for the photo " + a + " successfully fetched.")), Q(a, t)) : e(".fbp-comms").append('<div class="fbp-com"><p>' + it + "</p></div>") : console.log(t.error)
            })
        }

        function Y(e) {
            var a = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
            return e.replace(a, "<a href='$1'>$1</a>")
        }

        function $(a, t, i, n) {
            if (fa) {
                if (t && !n) {
                    var r = '<a class="fbp-link" href="' + t.link + '" target="_blank">' + tt + "</a>", s = r,
                        l = t.created_time;
                    l = l.split("T"), l = l[0], l = e.timeago(l);
                    var d = '<span class="fbp-posted">Veröffentlicht ' + l + "</span>";
                    if (t.name) var p = Y(t.name); else var p = "";
                    var c = '<div class="fbp-caption"><p><h3>' + ba + d + "</h3>" + p + "</p>" + s + "</div>";
                    i.find(".lb-details").prepend(c)
                } else if (Lt[n + "-meta"]) {
                    var c = Lt[n + "-meta"];
                    i.find(".lb-details").prepend(c)
                }
                Ga && o("Photo " + a + " meta content succssefully added.", !0), Lt[a + "-meta"] || (Lt[a + "-meta"] = c), i.find(".fbp-caption a").off().on("click", function () {
                    var a = e(this).attr("href"), t = window.open(a, "_blank");
                    t.focus()
                })
            }
        }

        function Z(a) {
            var t = e("#lightbox");
            t.find(".lb-details .fbp-comms").remove(), t.find(".lb-details .fbp-caption").remove(), Lt && Lt[a + "-meta"] ? $(a, !1, t, a) : FB.api("/" + a, {
                fields: "name, created_time, link",
                access_token: da
            }, function (e) {
                e && !e.error ? (Ga && (St.total = St.total + 1, o("Photo " + a + " meta content (description, link and published date) fetched.")), $(a, e, t)) : console.log(e.error)
            }), va === !0 && (e('<div class="fbp-comms"></div>').appendTo(e("#lightbox .lb-details")), X(a, !0))
        }

        function E(a) {
            var t = e(this);
            a.type ? a.preventDefault() : t = a;
            var o = t.attr("href"), i = t.attr("id"), n = e(".fb-first").text();
            n = parseInt(n, 10);
            var r;
            t.hasClass("fb-top-nav") && (i = t.hasClass("nxt") ? "aphnx" : "aphpr"), "aphnx" === i ? (i = "next", r = n + 1) : (i = "prev", r = n - 1);
            var s = parseInt(Ba, 10), l = s / ca, d = Math.round(l);
            0 == d && (d = 1);
            var p = !1;
            Ht[r] && (p = Ht[r]), "function" == typeof kt.albumsNavigate && kt.albumsNavigate(i, n, r), k("album", o, i, d, p)
        }

        function G(a) {
            a.preventDefault();
            var t = e(this), o = t.attr("href"), i = t.attr("id"), n = e(".fb-first").text();
            n = parseInt(n, 10);
            var r;
            t.hasClass("fb-top-nav") && (i = t.hasClass("nxt") ? "aphnx" : "aphpr"), "phnx" === i ? (i = "next", r = n + 1) : (i = "prev", r = n - 1);
            var s = a.data.i, l = bt[s];
            l = parseInt(l);
            var d = l / ua, p = Math.round(d);
            0 === p && (p = 1), "function" == typeof kt.photosNavigate && kt.photosNavigate(i, n, r), k("photos", o, i, p, !0)
        }

        function J(a) {
            var t = 1;
            if (Za) {
                var o = e("#pagination");
                if (o.find("li").remove(), a > 1) for (; a >= t;) {
                    var i = 'data-id="' + t + '"';
                    1 === t && (i += ' class="active"'), o.append("<li " + i + "><a>" + t + "</a></li>"), t++
                }
            }
        }

        function K(a, t) {
            var o = e("#faba-inner"), i = e("#pagination"), n = i.find("li.active");
            Za || (n = e(".fb-first").text());
            var r = i.find('li[data-id="' + a + '"]'), s = Za ? parseInt(n.data("id"), 10) : parseInt(n, 10),
                l = i.find("li").data("id");
            Za || (l = e(".fb-total").text());
            var d, p = 0;
            if (d = "none" == o.css("display") ? "photos" : "album", l = parseInt(l, 10), a > s) var c = "next"; else var c = "prev";
            if (Ya && (qa = a - 1), "album" === d) var u = "next" === c ? e("#aphnx").attr("href") : e("#aphpr").attr("href"); else var u = "next" === c ? e("#phnx").attr("href") : e("#phpr").attr("href");
            if ("photos" === d && !It[Va][a] || "album" === d && !Ht[a]) {
                void 0 != qa && a > qa && qa > s ? ("photos" === d ? k(d, It[Va][qa].next, c, l) : k(d, Ht[qa].next, c, l), s = qa) : (t && !Ct && (Ct = !0), k(d, u, c, l)), "next" === c ? s++ : s--;
                var f = setInterval(function () {
                    "next" === c && a > s || "prev" === c && s != a ? (e(".loader").length > 0 && (u = "photos" === d ? "next" === c ? e("#phnx").attr("href") : e("#phpr").attr("href") : "next" === c ? e("#aphnx").attr("href") : e("#aphpr").attr("href"), p = 1), 1 !== p || e(".loader").length > 0 || (p = 0, t && !Ct && (Ct = !0), k(d, u, c, l, !1, t), r.addClass("active").siblings().removeClass("active"), "next" === c ? s++ : s--)) : (clearInterval(f), r.addClass("active").siblings().removeClass("active"), e(".fb-first").text(a))
                }, 30)
            } else "photos" === d ? k(d, u, c, l, It[Va][a]) : k(d, u, c, l, Ht[a]), e(".fb-first").text(a), r.addClass("active").siblings().removeClass("active")
        }

        function ea() {
            e.ajaxSetup({cache: !0}), e.getScript("https://connect.facebook.net/en_US/sdk.js", function () {
                FB.init({appId: $a, xfbml: !0, version: "v2.5"}), la()
            })
        }

        function aa() {
            var a = parseInt(Ba), t = a / ca;
            1 > t && (t = 1);
            var i = Math.round(t), n = i * ca;
            t > i && a > n && i++, Ba = i, e("body").css("overflow-x", "hidden"), Ga && o("Fetching albums thumbs...")
        }

        function ta(a, t) {
            var o = e("#faba-inner");
            o.find(".imgdiv").waitForImages(!0).done(function () {
                o.find(".fb-album").velocity("stop").velocity(yt.album["in"], {
                    stagger: 32, begin: function () {
                        o.find(".fbp-overlay").remove(), e("#aphnx").attr("href", t ? a.next : a.paging.next), h(1), o.find(".fb-album").removeClass("hidden")
                    }, complete: function () {
                        ft.refresh(), e("body").css("overflow-x", "");
                        var a = t ? !0 : !1;
                        "function" == typeof kt.albumsLoaded && kt.albumsLoaded(1, !1, a), Ct = !1, g()
                    }
                }), (a.paging && a.paging.next || a.next) && Ba > 1 && (e("#aphnx").velocity("fadeIn", {duration: 600}), J(Ba)), t && e(".fb-wrap").each(function () {
                    var a = e(this), t = a.attr("id");
                    t = t.replace("a", "");
                    var o = a.find(".badge").text();
                    o = parseInt(o, 10), bt[t] = o
                });
                var i = e(".fb-album").eq(0).find("h4"), n = La - i.outerHeight(!0),
                    r = ".fb-album .fb-wrap{height: " + n + "px}";
                r += "#faba-inner, #fb-photos{min-height: " + La + "px}", r += "#faba{min-height: " + La + "px}", e("html").find('head style[data-id="fbp"]').append(r)
            })
        }

        function oa() {
            var e = ct.find(".fb-album").length, a = bt.photos,
                t = a * (Xa / 2) - a * wt.fadeDuration - e * gt.duration.image - _a - Ca;
            t /= t > 360 ? 360 : 60;
            var o = new Date, i = new Date(o.getTime() + 1e3 * t), n = i.getHours() + ":" + i.getMinutes();
            t /= 60;
            var r = {min: t.toFixed(2), time: n};
            return r
        }

        function ia() {
            Ct = !0, bt.photos = 0, "function" == typeof kt.albumsLoading && kt.albumsLoading(1, !1), Ya && P("meta"), Ht[1] ? (aa(), d(Ht[1].html), ka.length > 0 && w(), ta(Ht[1], !0), e("#fbp-navs").prepend('<a id="aphpr">Zurück</a><a id="aphnx">Weiter</a>'), e("#fb-breadcrumbs #fbpt .fb-total").text(Ba)) : FB.api(Ta + "/albums", "GET", {
                fields: "id, name, description, count,cover_photo",
                limit: ca,
                access_token: da
            }, function (a) {
                if (a && !a.error) {
                    var t = 0, i = a.data.length;
                    Ga && (St.total = St.total + 1, o("Albums for the 1st page fetched.")), aa(), "random" != Ra && (a.data.sort(function (e, a) {
                        if (e.cover_photo && a.cover_photo) {
                            var t = new Date(e.cover_photo.created_time), o = new Date(a.cover_photo.created_time);
                            return t - o
                        }
                    }), "asc" == Ra && a.data.reverse()), e.each(a.data, function (n, r) {
                        -1 == ka.indexOf(r.id) && -1 == ka.indexOf(r.name) ? FB.api("/" + r.id + "/picture", {access_token: da}, function (n) {
                            if (Ga && (St.total = St.total + 1, o("Album " + r.id + " thumb image fetched.")), r.count > 0) {
                                Tt.total = Tt.total + 1, p(n.data.url, r.name, r.id, r.description, r.count, r.cover_photo);
                                var s = r.id, l = r.count;
                                bt[s] = l, bt.photos = bt.photos + l
                            }
                            if (t++, t === i) {
                                var d = setInterval(function () {
                                    Tt.total === Tt.current && (clearInterval(d), ta(a))
                                }, 100);
                                if (Qa) {
                                    var c = oa();
                                    e("#cache-time").text(c.time), e("#cache-min").text(c.min + " min")
                                }
                            }
                        }) : t++
                    }), e("#fbp-navs").prepend('<a id="aphpr">Zurück</a><a id="aphnx">Weiter</a>'), e("#fb-breadcrumbs #fbpt .fb-total").text(Ba)
                } else console.log(a.error), e(".fbp-overlay").length > 0 || e("#faba-inner").append('<div class="fbp-overlay" style="height: 100%"><div class="tb-preloader-wave"></div></div>'), e(".fbp-overlay").append("<h3>" + a.error.message + "</h3>")
            })
        }

        function na() {
            if (Ma && !Qa) {
                Ma = window.setInterval(F, Wa);
                var a = '<a class="fbaply">Autoplay</a>';
                e("#fb-breadcrumbs").append(a), e("#lightbox").append(a), a = e(".fbaply"), a.on("click", T), a.addClass("active").text(Ua)
            }
            Qa && (clearInterval(Ma), Ma = window.setInterval(F, Xa), Ya = !1, ct.append('<div id="faba-caching"><div><h1>Fotos werden ins Cache geladen...</h1><h3>Wir bitten um Geduld die  albums+photos werden gerade neu gecacht.</h3><h4>Dies kann bis zu <span id="cache-min">(berechne...)</span></h4><h5>Komme wieder in <span id="cache-time"></span> bis dann sollte es fertig sein.</h5></div></div>')), Ya && (It = {}, P())
        }

        function ra() {
            var a = '<style type="text/css" data-id="fbp">';
            vt.overlay && (a += ".fbp-overlay{background:" + vt.overlay + "}"), vt.photosContainer && (a += ".fbp-container{background:" + vt.photosContainer + "}"), vt.viewAlbum && (a += ".fb-album .ovlpic a{" + vt.viewAlbum + "}"), vt.viewAlbumHover && (a += ".fb-album .ovlpic a:hover{" + vt.viewAlbumHover + "}"), vt.buttons && (a += "#phpr, #phnx, #aphpr, #aphnx{" + vt.buttons + "}"), vt.preloaderCircle && (a += ".loader{border: 8px solid " + vt.preloaderCircle + "}"), vt.preloaderRotator && (a += ".loader{border-left: 8px solid " + vt.preloaderRotator + "}"), a += "</style>", e("html").find("head").append(a)
        }

        function sa() {
            if (Ya) var e = setInterval(function () {
                Ht[1] && (clearInterval(e), Ea ? O() : ia())
            }, 100); else Ea ? O() : ia()
        }

        function la() {
            var a = e("#faba-inner"), o = e("#lightbox"), i = (o.find(".lb-dataContainer"), e("#fb-photos"));
            t(), r(), M(), W(), s(), na(), ra(), e("#fbgh").text(pa), ct.on("click", "#pagination li a", function () {
                var a = e(this).parent().data("id");
                a = parseInt(a, 10), K(a)
            }), ct.on("click", "#aphpr,#aphnx", E), i.on("click", "a[data-lightbox]", function () {
                Z(e(this).data("id")), za = e(this).index()
            }), e("#fbgh").on("click", U), a.on("click", ".fbp-view", D), o.find(".lb-dataContainer").on("click", ".fbc-lm", function () {
                X(e(this).attr("href"))
            }), o.find(".lb-nav a").on("click", function () {
                var a = za;
                if (e(this).hasClass("lb-next")) {
                    var t = e("a[data-lightbox]").eq(a + 1).data("id");
                    za++
                } else {
                    var t = e("a[data-lightbox]").eq(a - 1).data("id");
                    za--
                }
                Z(t), "function" == typeof kt.photoChange && kt.photoChange(t)
            }), a.append('<div class="fbp-overlay" style="height: 100%"><div class="tb-preloader-wave"></div></div>'), sa()
        }

        var da, pa, ca, ua, fa, ba, ha, ma, va, ga, xa, ya, wa, ka, Ia, Ha, La, Aa, Ca, Oa, Da, Sa, Ta, Ba, Ra, Na, Fa,
            _a, Pa, za, qa, Va, Ma, Wa, Ua, ja, Qa, Xa, Ya, $a, Za, Ea, Ga, Ja, Ka, et, at, tt, ot, it, nt, rt, st, lt,
            dt = {
                appID: "",
                token: "",
                account: "",
                albumsCachePath: "",
                metaCachePath: "",
                albumsTitle: "Galleries",
                fixedSize: !1,
                photosContainerLoad: 320,
                photosLayout: "flex",
                photoWidth: 220,
                photoHeight: 240,
                photosPerPage: 25,
                photoAnimation: "HorizontalSlide",
                photoMarginHorizontal: 5,
                photoMarginVertical: 5,
                photosSroll: 400,
                showCaption: !0,
                photoDesc: "Description",
                fbLinkText: "Open In Facebook",
                skipPhotos: [],
                correctPageNum: {},
                comments: !0,
                commentsLimit: 5,
                commentsMore: "Load More",
                noCommentsText: "Keine Kommentare in bei diesem Foto",
                commentsFaces: !0,
                lineLoad: 480,
                photoHoverAnimations: {
                    overlay: "expand",
                    button: "shrink",
                    duration: {image: 1500, overlay: 650, button: 650}
                },
                css: {
                    overlay: "",
                    viewAlbum: "",
                    buttons: "",
                    viewAlbumHover: "",
                    photosContainer: "",
                    preloaderCircle: "",
                    preloaderRotator: ""
                },
                albLimit: 15,
                albumWidth: 300,
                albumHeight: 260,
                albumsSort: "random",
                albumAnimation: "HorizontalSlide",
                albumMarginHorizontal: 10,
                albumMarginVertical: 10,
                albumsScroll: 400,
                keepAlbumOrder: !0,
                albumView: "Album ansehen <span>&rarr;</span>",
                skipAlbums: [],
                albumsCount: 1,
                albumsLoad: "expand",
                albumsLoadDuration: 650,
                albumsHoverAnimations: {
                    image: "shrink",
                    overlay: "expand",
                    button: "slideDown",
                    badge: "slideUpLong",
                    duration: {image: 830, overlay: 600, button: 450, badge: 600}
                },
                autoplay: !1,
                autoplayPauseText: "Pause Autoplay",
                autoplayResumeText: "Resume Autoplay",
                autoplaySpeed: 5e3,
                cacheData: !1,
                cacheSpeed: 4700,
                loadFromCache: !1,
                showPageNumbers: !0,
                singleAlbum: !1,
                debugging: !1,
                lightbox: {
                    fadeDuration: 500,
                    fitImagesInViewport: !0,
                    positionFromTop: 10,
                    resizeDuration: 700,
                    showImageNumberLabel: !0,
                    wrapAround: !1,
                    maxWidth: null,
                    maxHeight: null,
                    disableScrolling: !1,
                    albumLabel: "Bild %1 von %2",
                    alwaysShowNavOnTouchDevices: !1
                },
                callbacks: {
                    albumsLoading: function () {
                    }, albumsLoaded: function () {
                    }, albumOpened: function () {
                    }, albumsNavigate: function () {
                    }, albumHovered: function () {
                    }, photosLoading: function () {
                    }, photosLoaded: function () {
                    }, photoChange: function () {
                    }, photosNavigate: function () {
                    }, photoHovered: function () {
                    }
                }
            }, pt = e.extend({}, dt, a), ct = e("#faba"), ut = void 0, ft = void 0, bt = {}, ht = 1, mt = !0, vt = {},
            gt = {}, xt = {}, yt = {}, wt = {}, kt = {}, It = {}, Ht = {}, Lt = {}, At = 0, Ct = !1, Ot = !1, Dt = [],
            St = {}, Tt = {current: 0, total: 0};
        xa = xa === !0 ? 0 : null, St.total = 0;
        var Bt = {
            photo: {
                over: function (a) {
                    var t = a, o = [{
                        elements: t.find(".imgdiv"),
                        properties: {scaleX: 1.23, scaleY: 1.23, rotateZ: 6},
                        options: {duration: yt.photoHover.image.duration}
                    }, {
                        elements: t.find(".ovlpic"),
                        properties: yt.photoHover.overlay["in"],
                        options: {sequenceQueue: !1, duration: yt.photoHover.overlay.duration}
                    }, {
                        elements: t.find(".lupa"),
                        properties: yt.photoHover.button["in"],
                        options: {sequenceQueue: !1, duration: yt.photoHover.button.duration}
                    }];
                    if ("function" == typeof kt.photoHovered) {
                        var i = t.parent().attr("href");
                        kt.photoHovered(t, i)
                    }
                    e.Velocity.RunSequence(o)
                }, out: function (e) {
                    var a = e;
                    a.find(".imgdiv").velocity("stop"), a.find(".imgdiv").velocity("reverse", {duration: 400}), a.find(".ovlpic").velocity("stop"), a.find(".ovlpic").velocity("reverse", {duration: yt.photoHover.overlay.duration}), a.find(".lupa").velocity("reverse", {duration: yt.photoHover.button.duration})
                }
            }, album: {
                over: function (a) {
                    var t = a, o = [{
                        elements: t.find(".imgdiv"),
                        properties: yt.albumsHover.image.out,
                        options: {duration: yt.albumsHover.image.duration}
                    }, {
                        elements: t.find(".ovlpic"),
                        properties: yt.albumsHover.overlay["in"],
                        options: {sequenceQueue: !1, duration: yt.albumsHover.overlay.duration}
                    }, {
                        elements: t.find("a"),
                        properties: yt.albumsHover.button["in"],
                        options: {sequenceQueue: !1, duration: yt.albumsHover.button.duration}
                    }, {
                        elements: t.find(".badge"),
                        properties: yt.albumsHover.badge["in"],
                        options: {sequenceQueue: !1, duration: yt.albumsHover.badge.duration}
                    }];
                    if ("function" == typeof kt.albumHovered) {
                        var i = t.attr("id");
                        i = i.replace("a", ""), kt.albumHovered(t, i)
                    }
                    e.Velocity.RunSequence(o)
                }, out: function (e) {
                    var a = e;
                    a.find(".ovlpic").velocity("stop"), a.find(".ovlpic").velocity("reverse", {duration: yt.albumsHover.overlay.duration}), a.find(".badge").velocity("stop"), a.find(".badge").velocity("reverse", {duration: yt.albumsHover.badge.duration}), a.find(".imgdiv").velocity("stop"), a.find(".imgdiv").velocity(yt.albumsHover.image["in"])
                }
            }
        };
        e.fn.faba.hoverAlbum = function (a, t) {
            var o = e("#a" + a);
            "over" === t ? Bt.album.over(o) : Bt.album.out(o)
        }, e.fn.faba.openAlbum = function (a) {
            $link = e("#a" + a).find(".fbp-view"), D($link)
        }, e.fn.faba.closeAlbum = function () {
            U()
        }, e.fn.faba.reset = function (a) {
            var o = e("#faba-inner");
            e(".fbaply").length && e(".fbaply").remove(), Ht = {}, It = {}, pt = e.extend({}, dt, a), t(), r(), s(), na(), ra(), o.find(".fb-album").each(function () {
                x(e(this))
            })
        }, e.fn.faba.albumsReInit = function () {
            U(), e(".fb-album").length && e("#faba-inner .fb-album").remove(), sa()
        }, e.fn.faba.destroy = function (a, t) {
            e("#breadcrumbs").off(), e("#faba").off(), e("#faba-inner").off(), e("#fbgh").off(), e("#fb-photos").off(), e("#lightbox").off(), a && e("#faba").remove(), t && e("#faba-inner, #fb-photos").remove()
        }, ea()
    }
}(jQuery);