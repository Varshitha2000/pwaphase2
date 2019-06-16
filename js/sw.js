this.addEventListener('install',function(event){
  event.waitUntil(
    caches.open('mycache')
    .then(function(e){
        e.addAll([
             '/index.html',
             '/css/index.css',
             '/css/project9.css',
             '/css/form.css',
             '/js/get.js',
             '/js/main.js',
             '/js/project9.js',
             '/js/sw.js',
             '/form.html',
             '/Project9.html'
      ])
    })
  )
})
//fetch addEventListener
this.addEventListener('fetch',function(event){
  event.respondWith(
  caches.open('mycache')
  .then (function(cache){
    return cache.match(event.request)
   .then(function(result){
     return result||fetch(event.request)
     .then(function(result){
       cache.put(event.request,request.clone());
       return result;
     })
   })
})
)
})
