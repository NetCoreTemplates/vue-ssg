<template>
  <header class="border-b border-gray-200 pr-3">
    <div class="flex flex-wrap items-center">
      <div class="flex-shrink flex-grow-0">
        <router-link to="/">
          <div class="p-4 cursor-pointer"><img class="w-9 h-9" src="/assets/img/logo.svg" alt="MyApp logo"></div>
        </router-link>
      </div>
      <div class="flex flex-grow flex-shrink flex-nowrap justify-end items-center">
        <nav class="relative flex flex-grow">
          <ul class="flex flex-wrap items-center justify-end w-full m-0">
            <NavItem>
              <SecondaryButton class="m-2" href="/hosting">
                <div class="flex align-middle">
                  <MdiCurrencyUsd class="text-gray-700 w-5 h-5" />
                  0.40 /mo
                </div>
              </SecondaryButton>
            </NavItem>
            <NavItem>
              <NavLink href="/posts">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/todomvc">Todos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/bookings">Bookings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/features">Features</NavLink>
            </NavItem>
            <NavItem show="auth">
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>
            <NavItem show="role:Admin">
              <NavLink href="/admin">Admin</NavLink>
            </NavItem>
            <NavItem show="auth">
              <SecondaryButton class="m-2" @click="signout($router)">Sign Out</SecondaryButton>
            </NavItem>
            <NavItem hide="auth">
              <SecondaryButton class="m-2" href="/signin">Sign In</SecondaryButton>
            </NavItem>
            <NavItem hide="auth">
              <PrimaryButton class="m-2" href="/signup">Register</PrimaryButton>
            </NavItem>
            <li class="ml-2">

              <button type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" @click="toggleDark()">
                <span :class="`${!isDark ? 'translate-x-5' : 'translate-x-0'} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`">
                  <span :class="`${!isDark ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`" aria-hidden="true">
                    <CarbonMoon class="h-4 w-4 text-gray-400" />
                  </span>
                  <span :class="`${!isDark ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`" aria-hidden="true">
                    <CarbonSun class="h-4 w-4 text-indigo-600" />
                  </span>
                </span>
              </button>

            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import NavItem from "@/components/NavItem.vue"
import NavLink from "@/components/NavLink.vue"
import { isDark, toggleDark } from "@/composables"

import { signout } from "@/auth"
</script>
