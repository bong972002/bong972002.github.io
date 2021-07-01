$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'Xin chào bạn',
        text: 'Mình có điều nghiêm túc cần hỏi bạn, liệu hồn trả lời nhé =)).',
        imageUrl: 'img/cuteCat.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    var audio = new Audio('sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button póition
function moveButton() {
    var audio = new Audio('sound/Swish1.mp3');
    audio.play();
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text = " Tại vì tao nhảm nhí, vớ vẩn ";
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

// show popup
$('#yes').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: 'Nói cho tao lí do vì sao lại không quan tâm đi =((( chài ai buồn xỉu luôn á',
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Tại xao z tr'>",
        background: '#fff url("img/iput-bg.jpg")',
        backdrop: `
              rgba(0,0,123,0.4)
              url("img/giphy2.gif")
              left top
              no-repeat
            `,
        showCancelButton: true,
        cancelButtonText: "Thôi không quan tâm không trả lời",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Ib gửi cho tao á ^^'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: 'Rảnh thì call và quan tâm tao đi nào ^^',
                background: '#fff url("img/iput-bg.jpg")',
                title: 'Tao biết mà ^^',
                text: "Tao không biết với mày thể hiện tình cảm và sự quan tâm như nào. Nhưng mà đôi khi ở mày cho tao cảm giác như tao không được yêu ^^ Mày nhớ tao tùng nói mn bảo mình giống bạn thân hơn không? Mn k thể nhận xét như thế được đâu, có trong mối quan hệ của mình đâu mà người ta biết, với cả còn chưa thấy mày với tao ở bên cạnh nhau nữa, sao nói vậy được. Chính tao có cảm giác đấy vậy thôi. Tao không biết là mày sẽ bận gì, nếu bận thì có thể nói với tao rõ ràng mà, đúng không? Tao sẽ chủ động hơn, sẽ không suy nghĩ lung tung nữa. Tao vốn dĩ là 1 người rất nhạy cảm với suy nghĩ nhiều, nên từ 1 thứ rất nhỏ tao có thể buồn chết mịa vì nó. Có nhiều lần tao thực sự muốn hỏi mày rằng: Đối với tao, mày có cảm xúc yêu đương thực sự không? Vì, tao thấy nó cứ mập mờ, không rõ ràng gì luôn cả. Mà đôi khi có nhiều chuyện, cứ để tao suy nghĩ nhiều, tao sẽ suy nghĩ không ra và làm nó rắc rối hơn mất. Nên tao phải làm trò vớ vẩn này thôi, tao cứ như này suốt là tao không nói mà đi luôn á ^^ Tao là con gái mà, đừng để tao chủ động mãi thế chứ, tình cảm là cả 2 cùng xây chứ mày để 1 mình tao xây thì làm sao mà nổi...",
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = 'https://www.facebook.com/messages/t/100010425017810';
                  }
            })
        }
    })
})
