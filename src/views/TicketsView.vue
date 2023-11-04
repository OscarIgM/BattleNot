<template>
<Navbar></Navbar>
    <div class="container">
        <div class="d-flex justify-content-center" style="height: 100vh;">
            <div class="col-3 mt-5 border-end border-secondary">
                <div class="container">
                    <h4 class="mb-5" style="font-weight: bold;">Tickets</h4>
                    <div class="border-bottom border-secondary mt-3 ps-3">
                        <p style="font-weight: bold;"><i class="bi bi-chat" style="color: rgb(0, 110, 255);"></i>
                           Caso 1</p>
                    </div>
                </div>
            </div>
            <div class="col-9 mt-5 ms-5" >
                <div class="container" style="height: 100%; background-color:#002650 ;">
                    <div class="d-flex flex-column justify-co ntent-between p-2" style="height: 100%;">
                        <div class="d-flex flex-column m-5" style="background-color: ;">
                            <div class="d-flex flex-row mb-5">
                                <p class="text-primary" style="font-weight: bold;">Nombre Usuario 1</p>
                                <p class="mx-5">Texto de prueba?</p>
                            </div>
                            <div class="d-flex flex-row mb-5">
                                <p class="text-primary" style="font-weight: bold;">Administrador/Soporte</p>
                                <p class="mx-5">Texto de prueba?</p>
                            </div>
                        </div>
                        <div class="d-flex flex-row justify-content-center my-5">
                            <textarea class="form-control border border-secondary" rows="1" id="comment" name="text">Aaa</textarea>
                            <button class="btn btn-primary ms-2 rounded-5"><i class="bi bi-send"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>
    