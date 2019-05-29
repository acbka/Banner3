var tl = new TimelineMax({repeat: -1});

tl.from(".bg", 3, {opacity: 0})
    .from(".college", 1, {alpha: 0, ease: Back.easeInOut.config(1.4), y: 50}, "-=1.5")
    .from(".btn", .5, {alpha: 0, ease: Back.easeInOut.config(1.4), y: 20}, "-=.8")
    .from(".admission", .5, {opacity: 0}, "-=.3")
    .from(".logo", .5, {alpha: 0, ease: Back.easeInOut.config(1.4), y: -40})
    .from(".last_date", .5, {alpha: 0, ease: Back.easeInOut.config(1.4), y: -30})
    .from(".ribbon", .5, {alpha: 0, ease: Back.easeInOut.config(1.4), y: 50}, "-=.2")
    .from(".date", .5, {opacity: 0})
    .to(".fix", 1, {delay: 2, opacity: 0});


