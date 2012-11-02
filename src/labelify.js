//Draw ticks on a jQ slider with Raphael
/*global Raphael*/
function labelify(slider_id) {
    if (!slider_id) {
        return;
    }
    var slider_obj = $(slider_id).css({
        margin: '0px auto',
        position: 'absolute',
        bottom: 18,
        left: 0,
        right: 0
    }),
    container = $("<div />", {
        id: slider_id + "_container"
    }).css({
        position: 'relative',
        width: slider_obj.width() + 20,
        height: '75px'
    });
    
    //wrap label in container and put label canvas on top of it
    slider_obj.wrap(container);             
    var spaper = Raphael(slider_id + '_container', container.width(), container.height());
    
    var min = slider_obj.slider("option", "min"),
        max = slider_obj.slider("option", "max"),
        step = slider_obj.slider("option", "step"),
        slider_x = slider_obj.position().left + slider_obj.offset().left - 10,
        slider_y = slider_obj.position().top,
        n = (max - min) / step,
        w = slider_obj.width() / n,
        ticks = spaper.set(),
        labels = spaper.set();
        
    //draw ticks and set click event for labels
    for (var c = 0; c <= n; c += 1) {        
        var x = slider_x + c * w,
            tick = spaper.path("M" + x + "," + slider_y + "L" + x + "," + (slider_y - 4)).attr({ "stroke" : "#666", "stroke-width" : 1 }),
            label = spaper.text(x, slider_y - 18, String(min + step * c)).attr({ "text-anchor" : "middle", "fill" : "#666", "cursor" : "pointer" }).transform("r-90");
        ticks.push(tick);
        labels.push(label);        
    }
    
    labels.click(function(e) {
        slider_obj.slider("option", "value", parseInt(this.attr("text"), 10));
        slider_obj.trigger("slide");
    });    
}