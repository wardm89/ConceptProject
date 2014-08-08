define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/html',
    'dijit/layout/ContentPane',
    'dijit/layout/BorderContainer',
    'dijit/form/TextBox',
    'dijit/form/Button',
    'dojo/text!example/templates/Results2.html'
], function(declare, WidgetBase, TemplatedMixin, HTML, ContentPane, BorderContainer, TextBox, Button, template) {
    return declare([WidgetBase, TemplatedMixin], {

        templateString: template,

        navBar: null,


        postCreate : function() {
            this.inherited(arguments);
            console.log('Results2:postCreate()');
            this.createStuff();

        },

        createStuff: function(){
        var bc = new BorderContainer({style: "height: 275px; width: 200px; left: 600px; top: 150px; background-color: transprent"});


        var ct = new ContentPane({
            region: "top",
            style: "height: 25px",
            content: "<strong>This is some stuff</strong>"
        });
        bc.addChild(ct);


        var ct2 = new ContentPane({
            region: "center",
            style: "height: 100px; width: 100px; background-image: url('./example/Default/Default.jpg');)",
            content: ""

        });
        bc.addChild(ct2);

            var ct3 = new ContentPane({
                region: "bottom",
                style: "height: 100px",
                content: "<p>This is even more some stuff!!!</p>"
            });
            bc.addChild(ct3);

            /*var txt = new TextBox({

            });
            bc.addChild(txt);*/

            var btn = new Button({
                label: "Click Me!",
                onClick: function(){console.log("You clicked a button!")}
            });
            ct3.addChild(btn)


        document.body.appendChild(bc.domNode);
        bc.startup();



    }



    });
});