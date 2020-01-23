$(function () {
  let questions = new Array("font", "font-size", "font-weight", "font-style", "font-family", "font-variant", "text-align", "vertical-align",
    "line-height", "text-decoration", "text-indent", "text-transform", "letter-spacing", "word-spacing", "white-space", "color", "background",
    "background-color", "background-image", "background-repeat", "background-position", "background-attachment", "width", "height", "max-width",
    "min-width", "max-height", "min-height", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "padding", "padding-top",
    "padding-right", "padding-bottom", "padding-left", "border", "border-top", "border-right", "border-bottom", "border-left", "border-width",
    "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-color", "border-top-color", "border-right-color",
    "border-bottom-color", "border-left-color", "border-style", "border-top-style", "border-right-style", "border-bottom-style",
    "border-left-style", "overflow", "display", "visibility", "clip", "float", "clear", "position", "top", "right", "bottom", "left", "z-index",
    "direction", "unicode-bidi", "list-style", "list-style-type", "list-style-position", "list-style-image", "table-layout", "border-collapse",
    "border-spacing", "empty-cells", "caption-side", "content", "quotes", "outline", "outline-width", "outline-color", "outline-style", "cursor");
  function selectQuestion() {
    let question = '';
    let randnum = Math.floor(Math.random() * 87);
    questions[randnum].split('').forEach(function (c) {
      question += '<span>'+c+'</span>';
    });
    $('.question').html(question);
    return randnum;
  };
  
  function setKey() {
    points++
    $(".keyboard ." + questions[qNumber][chrNumber-1]).children().html('<div class="heart">' + charactor + '</div>');   // ブラウザのキーボードに今問題の文字にhtmlを挿入する
    $(".keyboard ." + questions[qNumber][chrNumber-1]).children().css({ color: 'white', height: '50px', lineHeight: '46px' });  //色等をつける
    $(".keyboard ." + questions[qNumber][chrNumber-1]).children().css('background-color', 'transparent');  //元の色を消す
  };
  function tipeMiss() {
    $('body').css('background-color', 'white');
    $('.heart').append('<div class="inazuma"><div class="inazumaA"></div><div class="inazumaB"></div>');
    setTimeout(function () {
      $('.heart').html(heart);
    }, 44);
    setTimeout(function () {
      $('.heart').append('<div class="inazuma"><div class="inazumaA"></div><div class="inazumaB"></div>');
    }, 56);
    setTimeout(function () {
      $('body').css('background-color', 'black');
    }, 70);
    setTimeout(function () {
      $('body').css('background-color', 'rgb(206, 198, 198)');
    }, 90);
    setTimeout(function () {
      $('.heart').html(heart);
    }, 110);
  };
  function nextWord() {
    chrNumber = 1;
    qNumber = selectQuestion();
    charactor = $(".keyboard ." + questions[qNumber][0]).children().text();
    setKey();
    heart = $('.heart').html();
  };
  let chrNumber = 1;                  // 問題の言葉の何文字目か
  let qNumber = selectQuestion();            // 配列の何個目の言葉か（ランダムで選ばれた）
  let charactor = $(".keyboard ." + questions[qNumber][0]).children().text();  
  let points = -1;
  setKey();
  let heart = $('.heart').html();
  let entered = null;

  // ここから最初の画面
  $('.message').fadeIn(4000).css('display', 'block');
  let set = setInterval(function () {
    $('.message').fadeIn(1900).css('display', 'block');
    $('.message').fadeOut(2900);
    setTimeout(function () {
      $('.start').css('backgroundColor', 'rgb(61, 43, 43)');
    }, 300);
    setTimeout(function () {
      $('.inazumaBig').css('display', 'block');
    }, 310);
    setTimeout(function () {
      $('.start').css('backgroundColor', 'rgba(21, 34, 65, .4)');
      $('.inazumaBig').css('display', 'none');
    }, 350);
    setTimeout(function () {
      $('.start').css('backgroundColor', 'rgba(0, 0, 0, .5)');
    }, 450);
    setTimeout(function () {
      $('.message2').css('display', 'block');
      $('.message').css('display', 'none');
    }, 2000);
    setTimeout(function () {
      $('.message2').css('display', 'none');
      $('.message').css('display', 'block');
    }, 2050);
    setTimeout(function () {
      $('.message2').css('display', 'block');
      $('.message').css('display', 'none');
    }, 2250);
    setTimeout(function () {
      $('.message2').css('display', 'none');
      $('.message').css('display', 'block');
    }, 2380);
  },5000);
  




  
  

  // タイピング画面
  $(window).keydown(function (e) {
    if (!entered) {
      if (e.keyCode == 13) {
        // 最初の画面の処理終わり
        clearInterval(set);
        // 時計開始
         let count = 101;
        setTimeout(function () {
          let countup = function () {
            count--;
            $('.timer').html(count);
            if (count > 0) {
              setTimeout(countup, 1000);
            } else {
              $('.background').fadeOut(400);
              $('.points').append('You got ' + points + ' points&nbsp;<div class="heartEnd"></div>');
              $('.heartEnd').css('display', 'inline');
              $('.end').fadeIn(2000);
              $(window).keydown(function (e) {
                if (e.keyCode == 13) {
                  window.location.reload();
                }
              })
            }
          }
          countup();
        },4000);
        // エンターがまだ押されてなくてエンターが今押されたなら記録する
        entered = 1;
        // 最初の画面を消す
        $('.start').fadeOut();
        // 問題をフェードイン
        $('.question').animate({
          opacity: "1"
        },
          5000, 'swing');
        // キー達をアニメーションで移動させてくる
        $('.key2S, .key3S, .key4S, .key5S, .key6S, .key7S, .key8S, .key9S, .key0S, .hyphenS, .symbol1S, .symbol2S, .qS, .wS, .eS, .rS, .tS, .yS, .uS, .iS, .oS, .pS, .symbol10S, .symbol11S, .aS, .sS, .dS, .fS, .gS, .hS, .jS, .kS, .lS, .symbol3S, .symbol4S, .symbol5S, .zS, .xS, .cS, .vS, .bS, .nS, .mS, .symbol6S, .symbol7S, .symbol8S, .symbol9S').animate({
          width: "50px",
          top: "0px",
          left: "0px",
          height: "50px",
          opacity: 1,
          fontSize: "30px",
          lineHeight: "48px"
        },
          3000, 'swing');
        $('.backspaceS, .capslockS').animate({
          width: "50px",
          top: "0px",
          left: "0px",
          height: "50px",
          fontSize: "15px",
          lineHeight: "17px",
          opacity: 1
        },
          3000, 'swing');
        $('.tabS, .optionS, .fnS').animate({
          width: "50px",
          top: "0px",
          left: "0px",
          height: "50px",
          fontSize: "15px",
          lineHeight: "50px",
          opacity: 1
        },
          3000, 'swing');
        $('.shiftS').animate({
          width: "92px",
          top: "0px",
          left: "0px",
          height: "50px",
          fontSize: "15px",
          lineHeight: "50px",
          opacity: 1
        },
          3000, 'swing');
        $('.spaceS').animate({
          fontSize: "23px",
          width: "162px",
          top: "0px",
          left: "0px",
          height: "50px",
          opacity: 1
        },
          3000, 'swing');
        $('.key1S').animate({
          width: "76px",
          top: "0px",
          left: "0px",
          height: "50px",
          fontSize: "30px",
          lineHeight: "50px",
          opacity: 1
        },
          3000, 'swing');
        $('.controlS').animate({
          width: "76px",
          top: "0px",
          left: "0px",
          height: "50px",
          fontSize: "15px",
          lineHeight: "50px",
          opacity: 1
        },
          3000, 'swing');
        $('.commandS').animate({
          width: "69px",
          top: "0px",
          left: "0px",
          height: "50px",
          fontSize: "15px",
          lineHeight: "50px",
          opacity: 1
        },
          3000, 'swing');
        $('.enterS').animate({
          height: "104.5px",
          width: "53px",
          top: "0px",
          left: "0px",
          fontSize: "15px",
          lineHeight: "50px",
          opacity: 1
        },
          3000, 'swing');
        $('.lngSelectKeyS').animate({
          width: "60px",
          top: "0px",
          left: "0px",
          height: "50px",
          fontSize: "15px",
          lineHeight: "50px",
          opacity: 1
        },
          3000, 'swing');
        $('.selectKeyS').animate({
          width: "60px",
          top: "0px",
          left: "0px",
          height: "50px",
          fontSize: "20px",
          lineHeight: "50px",
          opacity: 1
        },
          3000, 'swing');
        $('.upS').animate({
          width: "60px",
          top: "0px",
          left: "0px",
          height: "25px",
          fontSize: "20px",
          lineHeight: "25px",
          opacity: 1
        },
          3000, 'swing');
        $('.downS').animate({
          top: "25px",
          left: "0px",
          height: "25px",
          width: "60px",
          fontSize: "20px",
          lineHeight: "25px",
          opacity: 1
        },
         3000, 'swing');
      }
    } else {
      // すでにエンターが押されていてキーイベントが発火した場合、まず"-"だけ別に処理
      if (e.keyCode == 189) {
        if ($('.question span:nth-child(' + chrNumber + ')').text() == "-") {
          // 色を戻す
          $('.question span:nth-child(' + chrNumber + ')').css('color', 'rgb(61, 43, 43)');
          $(".keyboard .hyphen").children().html("-").css({ color: 'rgb(250, 161, 161)', backgroundColor: 'rgb(61, 43, 43)' });
          if (chrNumber < questions[qNumber].length) {
            chrNumber += 1;
            charactor = $(".keyboard ." + questions[qNumber][chrNumber - 1]).children().text();
            // 色を変える
            $('.question span:nth-child(' + chrNumber + ')').css('color', 'red');
            setKey();
            heart = $('.heart').html();
          } else {
            nextWord();
          }
        } else {
          tipeMiss();
        }
      } else {
        // すでにエンターが押されていてキーイベントが発火した場合で"-"じゃないときの処理(ほぼずっとここ)
        if ($('.question span:nth-child(' + chrNumber + ')').text() == String.fromCharCode(e.keyCode).toLowerCase()) {
          // 色を戻す
          $('.question span:nth-child(' + chrNumber + ')').css('color', 'rgb(61, 43, 43)');
          $(".keyboard ." + String.fromCharCode(e.keyCode).toLowerCase()).children().html(String.fromCharCode(e.keyCode)).css({ color: 'rgb(250, 161, 161)', backgroundColor: 'rgb(61, 43, 43)' });
          if (chrNumber < questions[qNumber].length) {
            chrNumber += 1;
            charactor = $(".keyboard ." + questions[qNumber][chrNumber - 1]).children().text();
            // 色を変える
            $('.question span:nth-child(' + chrNumber + ')').css('color', 'red');
            if (questions[qNumber][chrNumber - 1] !== "-") {
              setKey();
            } else {
              $(".hyphen").children().html('<div class="heart">-</div>');   // ブラウザのキーボードに今問題の文字にhtmlを挿入する
              $(".hyphen").children().css({ color: 'white', height: '50px', lineHeight: '46px' });  //色等をつける
              $(".hyphen").children().css('background-color', 'transparent');  //元の色を消す
            }
            heart = $('.heart').html();
          } else {
            nextWord();
          }
        } else {
          tipeMiss();
        }
      }
    }
  })
})