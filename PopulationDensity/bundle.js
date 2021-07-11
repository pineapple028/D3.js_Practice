(function (d3) {
  'use strict';

  const svg = d3.select('svg');


  const height = +svg.attr('height');
  const width = parseFloat(svg.attr('width'));

  const render = data => {
    
    const xValue = d => d.populationDensity;
    const yValue = d => d.country;
    const margin = {top : 40, right : 20,left : 130, bottom : 50};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
  	const xScale = d3.scaleLinear()
    	.domain([0,d3.max(data,xValue)])
  		.range([0,innerWidth]);
    
    const yScale = d3.scaleBand()
    	.domain(data.map(yValue))
    	.range([0,innerHeight])
    	.padding(0.1);
    
    const yAxis = d3.axisLeft(yScale);
    

    
    const xAxis = d3.axisBottom(xScale)
    	.tickSize(-innerHeight);
    
  	svg.append('text')
    	.text('Population Density Unit(People/1000 x km²)')
    	.attr('transform',`translate(20,${height/2 + 200}) rotate(-90)`);
    	
    
    
    const g = svg.append('g')
    	.attr('transform',`translate(${margin.left},${margin.top})`);
    
    const text = svg.append('text')
    	.text('Top 20 Densest Cities or Regioins')
    	.attr('transform','translate(250,30)')
    	.attr('class','title');
    
    text.style("font-size", "30px");

    
    g.append('g').call(yAxis)
    	.selectAll('.domain, .tick line')
    	.remove();
    
    const xAxisG = g.append('g').call(xAxis)
    	.attr('transform',`translate(0,${innerHeight})`);
      
    
    xAxisG.select('.domain')
    	.remove();
    

    
    xAxisG.append('text')
    	.attr('y',40)
    	.attr('x',innerWidth / 2)
    	.attr('fill','black')
    	.text('Density');
    
    
    
    g.selectAll('rect').data(data)
    	.enter().append('rect')
    		.attr('y', d => yScale(yValue(d)))
    		.attr('width',d => xScale(xValue(d)))
    		.attr('height',yScale.bandwidth());
    
   
  };



  d3.csv('data.csv').then(data => {
  	data.forEach(d => {
    	d.populationDensity = d.populationDensity / 1000;
    });
    
    render(data);
  });

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2VsZWN0LCBjc3Ysc2NhbGVMaW5lYXIsbWF4LHNjYWxlQmFuZCxheGlzTGVmdCxheGlzQm90dG9tLGZvcm1hdH0gZnJvbSAnZDMnO1xuXG5cbmNvbnN0IHN2ZyA9IHNlbGVjdCgnc3ZnJyk7XG5cblxuY29uc3QgaGVpZ2h0ID0gK3N2Zy5hdHRyKCdoZWlnaHQnKTtcbmNvbnN0IHdpZHRoID0gcGFyc2VGbG9hdChzdmcuYXR0cignd2lkdGgnKSk7XG5cbmNvbnN0IHJlbmRlciA9IGRhdGEgPT4ge1xuICBcbiAgY29uc3QgeFZhbHVlID0gZCA9PiBkLnBvcHVsYXRpb25EZW5zaXR5O1xuICBjb25zdCB5VmFsdWUgPSBkID0+IGQuY291bnRyeTtcbiAgY29uc3QgbWFyZ2luID0ge3RvcCA6IDQwLCByaWdodCA6IDIwLGxlZnQgOiAxMzAsIGJvdHRvbSA6IDUwfTtcbiAgY29uc3QgaW5uZXJXaWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gIGNvbnN0IGlubmVySGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG4gIFxuXHRjb25zdCB4U2NhbGUgPSBzY2FsZUxpbmVhcigpXG4gIFx0LmRvbWFpbihbMCxtYXgoZGF0YSx4VmFsdWUpXSlcblx0XHQucmFuZ2UoWzAsaW5uZXJXaWR0aF0pO1xuICBcbiAgY29uc3QgeVNjYWxlID0gc2NhbGVCYW5kKClcbiAgXHQuZG9tYWluKGRhdGEubWFwKHlWYWx1ZSkpXG4gIFx0LnJhbmdlKFswLGlubmVySGVpZ2h0XSlcbiAgXHQucGFkZGluZygwLjEpO1xuICBcbiAgY29uc3QgeUF4aXMgPSBheGlzTGVmdCh5U2NhbGUpO1xuICBcblxuICBcbiAgY29uc3QgeEF4aXMgPSBheGlzQm90dG9tKHhTY2FsZSlcbiAgXHQudGlja1NpemUoLWlubmVySGVpZ2h0KTtcbiAgXG5cdHN2Zy5hcHBlbmQoJ3RleHQnKVxuICBcdC50ZXh0KCdQb3B1bGF0aW9uIERlbnNpdHkgVW5pdChQZW9wbGUvMTAwMCB4IGttw4LCsiknKVxuICBcdC5hdHRyKCd0cmFuc2Zvcm0nLGB0cmFuc2xhdGUoMjAsJHtoZWlnaHQvMiArIDIwMH0pIHJvdGF0ZSgtOTApYCk7XG4gIFx0XG4gIFxuICBcbiAgY29uc3QgZyA9IHN2Zy5hcHBlbmQoJ2cnKVxuICBcdC5hdHRyKCd0cmFuc2Zvcm0nLGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKTtcbiAgXG4gIGNvbnN0IHRleHQgPSBzdmcuYXBwZW5kKCd0ZXh0JylcbiAgXHQudGV4dCgnVG9wIDIwIERlbnNlc3QgQ2l0aWVzIG9yIFJlZ2lvaW5zJylcbiAgXHQuYXR0cigndHJhbnNmb3JtJywndHJhbnNsYXRlKDI1MCwzMCknKVxuICBcdC5hdHRyKCdjbGFzcycsJ3RpdGxlJyk7XG4gIFxuICB0ZXh0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMzBweFwiKTtcblxuICBcbiAgZy5hcHBlbmQoJ2cnKS5jYWxsKHlBeGlzKVxuICBcdC5zZWxlY3RBbGwoJy5kb21haW4sIC50aWNrIGxpbmUnKVxuICBcdC5yZW1vdmUoKTtcbiAgXG4gIGNvbnN0IHhBeGlzRyA9IGcuYXBwZW5kKCdnJykuY2FsbCh4QXhpcylcbiAgXHQuYXR0cigndHJhbnNmb3JtJyxgdHJhbnNsYXRlKDAsJHtpbm5lckhlaWdodH0pYCk7XG4gICAgXG4gIFxuICB4QXhpc0cuc2VsZWN0KCcuZG9tYWluJylcbiAgXHQucmVtb3ZlKCk7XG4gIFxuXG4gIFxuICB4QXhpc0cuYXBwZW5kKCd0ZXh0JylcbiAgXHQuYXR0cigneScsNDApXG4gIFx0LmF0dHIoJ3gnLGlubmVyV2lkdGggLyAyKVxuICBcdC5hdHRyKCdmaWxsJywnYmxhY2snKVxuICBcdC50ZXh0KCdEZW5zaXR5Jyk7XG4gIFxuICBcbiAgXG4gIGcuc2VsZWN0QWxsKCdyZWN0JykuZGF0YShkYXRhKVxuICBcdC5lbnRlcigpLmFwcGVuZCgncmVjdCcpXG4gIFx0XHQuYXR0cigneScsIGQgPT4geVNjYWxlKHlWYWx1ZShkKSkpXG4gIFx0XHQuYXR0cignd2lkdGgnLGQgPT4geFNjYWxlKHhWYWx1ZShkKSkpXG4gIFx0XHQuYXR0cignaGVpZ2h0Jyx5U2NhbGUuYmFuZHdpZHRoKCkpO1xuICBcbiBcbn07XG5cblxuXG5jc3YoJ2RhdGEuY3N2JykudGhlbihkYXRhID0+IHtcblx0ZGF0YS5mb3JFYWNoKGQgPT4ge1xuICBcdGQucG9wdWxhdGlvbkRlbnNpdHkgPSBkLnBvcHVsYXRpb25EZW5zaXR5IC8gMTAwMDtcbiAgfSk7XG4gIFxuICByZW5kZXIoZGF0YSk7XG59KVxuXG5cbiJdLCJuYW1lcyI6WyJzZWxlY3QiLCJzY2FsZUxpbmVhciIsIm1heCIsInNjYWxlQmFuZCIsImF4aXNMZWZ0IiwiYXhpc0JvdHRvbSIsImNzdiJdLCJtYXBwaW5ncyI6Ijs7O0VBR0EsTUFBTSxHQUFHLEdBQUdBLFNBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQjtBQUNBO0VBQ0EsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0VBQ25DLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDNUM7RUFDQSxNQUFNLE1BQU0sR0FBRyxJQUFJLElBQUk7RUFDdkI7RUFDQSxFQUFFLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLENBQUM7RUFDMUMsRUFBRSxNQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztFQUNoQyxFQUFFLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0VBQ2hFLEVBQUUsTUFBTSxVQUFV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