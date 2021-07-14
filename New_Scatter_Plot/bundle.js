(function (d3) {
  'use strict';

  const svg = d3.select('svg');


  const height = +svg.attr('height');
  const width = parseFloat(svg.attr('width'));

  const render = data => {
    
    const title = 'GDP vs Population';
    
    const xValue = d => d.GDP_per_capita;
    const xAxisLabel = 'Population';
    
    const yValue = d => d.Population;
    const yAxisLabel = 'GDP per capita(thousand)';
    
    const margin = {top : 40, right : 20,left : 130, bottom : 50};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
  	const xScale = d3.scaleLinear()
    	.domain(d3.extent(data,xValue))
  		.range([0,innerWidth])
    	.nice();
    
    const yScale = d3.scaleLinear()
    	.domain(d3.extent(data,yValue))
    	//.domain(data.map(yValue))
      //.domain([0,max(data,yValue)])
    	.range([0,innerHeight])
    	.nice();
    
    const yAxis = d3.axisLeft(yScale)
    	.tickSize(-innerWidth)
    	.tickPadding(10);
    

    
    const xAxis = d3.axisBottom(xScale)
    	.tickSize(-innerHeight)
    	.tickPadding(10);
    
  	svg.append('text')
    	.text(yAxisLabel)
    	.attr('transform',`translate(50,${height/2 + 100}) rotate(-90)`);
    	
    
    
    const g = svg.append('g')
    	.attr('transform',`translate(${margin.left},${margin.top})`);
    
    const text = svg.append('text')
    	.text(title)
    	.attr('transform',`translate(${innerWidth/2},24)`)
    	.attr('class','title');
    
    text.style("font-size", "30px");

    
    g.append('g').call(yAxis)
    	.selectAll('.domain')
    	.remove();
    
    const xAxisG = g.append('g').call(xAxis)
    	.attr('transform',`translate(0,${innerHeight})`);
      
    
    xAxisG.select('.domain')
    	.remove();
    

    
    xAxisG.append('text')
    	.attr('y',40)
    	.attr('x',innerWidth / 2)
    	.attr('fill','black')
    	.text(xAxisLabel + '(million)');
    
    
    
    g.selectAll('circle').data(data)
    	.enter().append('circle')
    		.attr('cy', d => yScale(yValue(d)))
    		.attr('cx',d => xScale(xValue(d)))
    		.attr('r',10);
    
  };



  d3.csv('https://gist.githubusercontent.com/pineapple028/4f18e32e2c35e6f523d68a3389c617bf/raw/042e07d96d4804eb9ec953a41421b0698dd86641/Population_And_GDP_by_Country.csv').then(data => {
  	data.forEach(d => {
      d.Population = +d.Population;   
    });
    
    render(data);
  });

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2VsZWN0LCBjc3Ysc2NhbGVMaW5lYXIsbWF4LGF4aXNMZWZ0LGF4aXNCb3R0b20sZm9ybWF0LGV4dGVudCxzY2FsZVBvaW50fSBmcm9tICdkMyc7XG5cblxuY29uc3Qgc3ZnID0gc2VsZWN0KCdzdmcnKTtcblxuXG5jb25zdCBoZWlnaHQgPSArc3ZnLmF0dHIoJ2hlaWdodCcpO1xuY29uc3Qgd2lkdGggPSBwYXJzZUZsb2F0KHN2Zy5hdHRyKCd3aWR0aCcpKTtcblxuY29uc3QgcmVuZGVyID0gZGF0YSA9PiB7XG4gIFxuICBjb25zdCB0aXRsZSA9ICdHRFAgdnMgUG9wdWxhdGlvbic7XG4gIFxuICBjb25zdCB4VmFsdWUgPSBkID0+IGQuR0RQX3Blcl9jYXBpdGE7XG4gIGNvbnN0IHhBeGlzTGFiZWwgPSAnUG9wdWxhdGlvbic7XG4gIFxuICBjb25zdCB5VmFsdWUgPSBkID0+IGQuUG9wdWxhdGlvbjtcbiAgY29uc3QgeUF4aXNMYWJlbCA9ICdHRFAgcGVyIGNhcGl0YSh0aG91c2FuZCknO1xuICBcbiAgY29uc3QgbWFyZ2luID0ge3RvcCA6IDQwLCByaWdodCA6IDIwLGxlZnQgOiAxMzAsIGJvdHRvbSA6IDUwfTtcbiAgY29uc3QgaW5uZXJXaWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gIGNvbnN0IGlubmVySGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG4gIFxuXHRjb25zdCB4U2NhbGUgPSBzY2FsZUxpbmVhcigpXG4gIFx0LmRvbWFpbihleHRlbnQoZGF0YSx4VmFsdWUpKVxuXHRcdC5yYW5nZShbMCxpbm5lcldpZHRoXSlcbiAgXHQubmljZSgpO1xuICBcbiAgY29uc3QgeVNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICBcdC5kb21haW4oZXh0ZW50KGRhdGEseVZhbHVlKSlcbiAgXHQvLy5kb21haW4oZGF0YS5tYXAoeVZhbHVlKSlcbiAgICAvLy5kb21haW4oWzAsbWF4KGRhdGEseVZhbHVlKV0pXG4gIFx0LnJhbmdlKFswLGlubmVySGVpZ2h0XSlcbiAgXHQubmljZSgpO1xuICBcbiAgY29uc3QgeUF4aXMgPSBheGlzTGVmdCh5U2NhbGUpXG4gIFx0LnRpY2tTaXplKC1pbm5lcldpZHRoKVxuICBcdC50aWNrUGFkZGluZygxMCk7XG4gIFxuXG4gIFxuICBjb25zdCB4QXhpcyA9IGF4aXNCb3R0b20oeFNjYWxlKVxuICBcdC50aWNrU2l6ZSgtaW5uZXJIZWlnaHQpXG4gIFx0LnRpY2tQYWRkaW5nKDEwKTtcbiAgXG5cdHN2Zy5hcHBlbmQoJ3RleHQnKVxuICBcdC50ZXh0KHlBeGlzTGFiZWwpXG4gIFx0LmF0dHIoJ3RyYW5zZm9ybScsYHRyYW5zbGF0ZSg1MCwke2hlaWdodC8yICsgMTAwfSkgcm90YXRlKC05MClgKTtcbiAgXHRcbiAgXG4gIFxuICBjb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXG4gIFx0LmF0dHIoJ3RyYW5zZm9ybScsYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuICBcbiAgY29uc3QgdGV4dCA9IHN2Zy5hcHBlbmQoJ3RleHQnKVxuICBcdC50ZXh0KHRpdGxlKVxuICBcdC5hdHRyKCd0cmFuc2Zvcm0nLGB0cmFuc2xhdGUoJHtpbm5lcldpZHRoLzJ9LDI0KWApXG4gIFx0LmF0dHIoJ2NsYXNzJywndGl0bGUnKTtcbiAgXG4gIHRleHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIzMHB4XCIpO1xuXG4gIFxuICBnLmFwcGVuZCgnZycpLmNhbGwoeUF4aXMpXG4gIFx0LnNlbGVjdEFsbCgnLmRvbWFpbicpXG4gIFx0LnJlbW92ZSgpO1xuICBcbiAgY29uc3QgeEF4aXNHID0gZy5hcHBlbmQoJ2cnKS5jYWxsKHhBeGlzKVxuICBcdC5hdHRyKCd0cmFuc2Zvcm0nLGB0cmFuc2xhdGUoMCwke2lubmVySGVpZ2h0fSlgKTtcbiAgICBcbiAgXG4gIHhBeGlzRy5zZWxlY3QoJy5kb21haW4nKVxuICBcdC5yZW1vdmUoKTtcbiAgXG5cbiAgXG4gIHhBeGlzRy5hcHBlbmQoJ3RleHQnKVxuICBcdC5hdHRyKCd5Jyw0MClcbiAgXHQuYXR0cigneCcsaW5uZXJXaWR0aCAvIDIpXG4gIFx0LmF0dHIoJ2ZpbGwnLCdibGFjaycpXG4gIFx0LnRleHQoeEF4aXNMYWJlbCArICcobWlsbGlvbiknKTtcbiAgXG4gIFxuICBcbiAgZy5zZWxlY3RBbGwoJ2NpcmNsZScpLmRhdGEoZGF0YSlcbiAgXHQuZW50ZXIoKS5hcHBlbmQoJ2NpcmNsZScpXG4gIFx0XHQuYXR0cignY3knLCBkID0+IHlTY2FsZSh5VmFsdWUoZCkpKVxuICBcdFx0LmF0dHIoJ2N4JyxkID0+IHhTY2FsZSh4VmFsdWUoZCkpKVxuICBcdFx0LmF0dHIoJ3InLDEwKTtcbiAgXG59O1xuXG5cblxuY3N2KCdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3BpbmVhcHBsZTAyOC80ZjE4ZTMyZTJjMzVlNmY1MjNkNjhhMzM4OWM2MTdiZi9yYXcvMDQyZTA3ZDk2ZDQ4MDRlYjllYzk1M2E0MTQyMWIwNjk4ZGQ4NjY0MS9Qb3B1bGF0aW9uX0FuZF9HRFBfYnlfQ291bnRyeS5jc3YnKS50aGVuKGRhdGEgPT4ge1xuXHRkYXRhLmZvckVhY2goZCA9PiB7XG4gICAgZC5Qb3B1bGF0aW9uID0gK2QuUG9wdWxhdGlvbjsgICBcbiAgfSk7XG4gIFxuICByZW5kZXIoZGF0YSk7XG59KVxuXG5cbiJdLCJuYW1lcyI6WyJzZWxlY3QiLCJzY2FsZUxpbmVhciIsImV4dGVudCIsImF4aXNMZWZ0IiwiYXhpc0JvdHRvbSIsImNzdiJdLCJtYXBwaW5ncyI6Ijs7O0VBR0EsTUFBTSxHQUFHLEdBQUdBLFNBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQjtBQUNBO0VBQ0EsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0VBQ25DLE1BQU0sS0FB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