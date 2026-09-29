// Menu no celular
(function(){
  var btn=document.querySelector('.nav-toggle');
  var nav=document.getElementById('menu');
  if(!btn||!nav) return;
  btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
  });
  nav.addEventListener('click',function(e){
    if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}
  });
})();

// Mapa das cidades-sede do SBGFA
(function(){
  var container=document.getElementById('mapa-sedes');
  if(!container||typeof L==='undefined') return;

  var sedes=[
    {cidade:'Rio Claro',uf:'SP',lat:-22.4100,lng:-47.5600,edicoes:['I · 1983 · Unesp']},
    {cidade:'Belo Horizonte',uf:'MG',lat:-19.9167,lng:-43.9345,edicoes:['II · 1986 · UFMG','VIII · 1999 · UFMG']},
    {cidade:'Rio de Janeiro',uf:'RJ',lat:-22.9068,lng:-43.1729,edicoes:['III · 1988 · UFRJ','X · 2003 · UFRJ','XIX · 2021 · UERJ']},
    {cidade:'Porto Alegre',uf:'RS',lat:-30.0346,lng:-51.2177,edicoes:['IV · 1991 · UFRGS']},
    {cidade:'São Paulo',uf:'SP',lat:-23.5505,lng:-46.6333,edicoes:['V · 1993 · USP','XI · 2005 · USP']},
    {cidade:'Goiânia',uf:'GO',lat:-16.6869,lng:-49.2648,edicoes:['VI · 1995 · UFG']},
    {cidade:'Curitiba',uf:'PR',lat:-25.4284,lng:-49.2733,edicoes:['VII · 1997 · UFPR']},
    {cidade:'Recife',uf:'PE',lat:-8.0476,lng:-34.8770,edicoes:['IX · 2001 · UFPE']},
    {cidade:'Natal',uf:'RN',lat:-5.7945,lng:-35.2110,edicoes:['XII · 2007 · UFRN']},
    {cidade:'Viçosa',uf:'MG',lat:-20.7545,lng:-42.8825,edicoes:['XIII · 2009 · UFV']},
    {cidade:'Dourados',uf:'MS',lat:-22.2231,lng:-54.8120,edicoes:['XIV · 2011 · UFGD']},
    {cidade:'Vitória',uf:'ES',lat:-20.3155,lng:-40.3128,edicoes:['XV · 2013 · UFES']},
    {cidade:'Teresina',uf:'PI',lat:-5.0892,lng:-42.8019,edicoes:['XVI · 2015 · UFPI']},
    {cidade:'Campinas',uf:'SP',lat:-22.9056,lng:-47.0608,edicoes:['XVII · 2017 · Unicamp']},
    {cidade:'Fortaleza',uf:'CE',lat:-3.7319,lng:-38.5267,edicoes:['XVIII · 2019 · UFC']},
    {cidade:'João Pessoa',uf:'PB',lat:-7.1150,lng:-34.8631,edicoes:['XX · 2024 · UFPB']},
    {cidade:'Belém',uf:'PA',lat:-1.4558,lng:-48.4902,edicoes:['XXI · 2026 · UFPA']},
    {cidade:'Uberlândia',uf:'MG',lat:-18.9126,lng:-48.2754,edicoes:['XXII · 2028 · UFU'],proposta:true}
  ];

  var mapa=L.map(container,{scrollWheelZoom:false,zoomControl:true});
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom:19,
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mapa);

  var limites=[];
  sedes.forEach(function(sede){
    var icone=L.divIcon({
      className:'',
      html:'<span class="map-pin'+(sede.proposta?' proposta':'')+'"></span>',
      iconSize:sede.proposta?[31,31]:[25,25],
      iconAnchor:sede.proposta?[15,30]:[12,24],
      popupAnchor:[0,-28]
    });
    var etiqueta=sede.proposta?'Sede proposta':(sede.edicoes.length>1?'Edições realizadas':'Edição realizada');
    var detalhes=sede.edicoes.map(function(edicao){return '<p>'+edicao+'</p>';}).join('');
    L.marker([sede.lat,sede.lng],{
      icon:icone,
      title:sede.cidade+', '+sede.uf,
      riseOnHover:true,
      zIndexOffset:sede.proposta?1000:0
    }).addTo(mapa).bindPopup('<h3>'+sede.cidade+', '+sede.uf+'</h3><p><strong>'+etiqueta+'</strong></p>'+detalhes);
    limites.push([sede.lat,sede.lng]);
  });

  mapa.fitBounds(limites,{padding:[35,35]});

  var legenda=L.control({position:'bottomright'});
  legenda.onAdd=function(){
    var div=L.DomUtil.create('div','map-legend');
    div.innerHTML='<div><i class="realizada"></i>Edições realizadas</div><div><i class="candidata"></i>Sede proposta · 2028</div>';
    return div;
  };
  legenda.addTo(mapa);
})();
