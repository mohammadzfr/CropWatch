
/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 
const supabaseUrl = 'https://mhfznlqqbhxkqhyiofbu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oZnpubHFxYmh4a3FoeWlvZmJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyNzI3OTUsImV4cCI6MjAwMjg0ODc5NX0.r5otWU4z5jNjElrIKb5EMeH6eKPt-HYqU5ptfRff_o8"
const client = supabase.createClient(supabaseUrl, supabaseKey)



client
  .from('SensorData')
  .select("*").then(console.log);

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
