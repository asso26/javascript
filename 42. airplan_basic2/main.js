let airplane=document.querySelector('.airplane');
let airplaneScrollTimeline=document.querySelector('.airplane-scroll-timeline');


airplane.animate([
    {offsetDistance:"100%"},
    {offsetDistance:"0%"}
],{
    fill: 'both',
    timeline: new ScrollTimeline({
        scrollOffsets: [
           {target:airplaneScrollTimeline,edge:"start",threshold:1},
           {target:airplaneScrollTimeline,edge:"end",threshold:1}
        ]
    })
})
