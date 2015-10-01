$(function () {
    $('#send').on('click', function () {
        var settings = {
            method: 'post',
            dataType: 'json',
            data: $('#msgform').serialize()
        };
        $.ajax('/register', settings)
            .done(function (data) {
                if (data.success) {
                    view(data.id);
                }
            });
    });

    // 상세보기
    function view(id) {
        $('[id$=Panel]').hide();
        $('#viewPanel').show();
        $.ajax({
            url: '/view',
            dataType: 'json',
            data: {
                id: id
            }
        }).done(function(res){
            var msg = res[0];
            $('#vname').html(msg.name);
            $('#vmsg').html(msg.message);
        });
    }
    
    // 목록보기
    function list(pageNo) {
        $('[id$=Panel]').hide();
        $('#listPanel').show();
        $.ajax({
            url: '/list',
            dataType: 'json',
            data: {
                pageNo: pageNo
            }
        }).done(function(res){
            $('#list').html();
            $.each(res, function(idx, msg) {
                $('#list').append('<dt>' + msg.name + '</dt>');
                $('#list').append('<dd>' + msg.message + '</dd>');
            });
        });
    }
    
    // 글쓰기
    function write() {
        $('[id$=Panel]').hide();
        $('#writePanel').show();
    }
    
    $('#btnList').on('click', function(){
        list(0);
    });
    $('#btnWrite').on('click', write);
});