$(function() {
    $('.ddpanelcontent').hide();


    setUpDDPanels();

    function setUpDDPanels() {
        var contents = $(".ddpanelcontent");
        var tabs = $('.ddpaneltab');
        var closeButton = contents.find('.close-button');

        contents.css({height: "auto", overflow: "hidden"});

        tabs.click(tabClicked);
        closeButton.click(closeAll);

        function tabClicked(){

            var tab = $(this);
            var content = $(tab.attr("href"));

            var open = tab.is('.selected');
            if(open) {
                tab.removeClass('selected');
                content.removeClass('selected');
                content.stop().slideUp(1000);
            } else {
                closeAll();

               // var contentHeight = content.children().height();

                tab.addClass('selected');
                content.addClass('selected');
                content.stop().slideDown(1000);
            }

            return false;
        }

        function closeAll() {
            tabs.removeClass('selected');
            contents.removeClass('selected');
            contents.stop().slideUp(1000);
        }

    } // end DD panels

}); // End ready
