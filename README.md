labelify.js 0.1a
========

# DESCRIPTION
Raphael-powered labeler for jQuery sliders. By calling labelify() on the slider 
element's ID, this instutes tick marks and label using Raphael silently--meaning
it creates its own paper instance and doesn't require the developer to mess
with any Raphael calls.

# DEPENDENCIES
jQuery
jQuery UI
[Raphael.js](https://raw.github.com/DmitryBaranovskiy/raphael/master/raphael.js)

After a slider is instantiated, feed its ID to the function like so:

    labelify("#timeslider");

While it would make sense to add a "labelify(this)" line to the create() function, I believe the slider's events are not all initiated. Labelify needs those events so that clicking the labels calls the correct behavior. 

# TO DO
 - Move styling to a CSS file
 - Determine the offset in labels -- currently a crude "- 10" (line 29) -- dynamically