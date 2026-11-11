<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";

const route = useRoute();

type NavChild = {
  label: string;
  href: string;
  icon: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    label: "О центре",
    href: "/about",
    children: [
      {
        label: "О TANAIS",
        href: "/about",
        icon: "tabler:building-community",
      },
      {
        label: "Наш подход",
        href: "/about#approach",
        icon: "tabler:brain",
      },
      {
        label: "Первичный разбор",
        href: "/about#diagnostics",
        icon: "tabler:scan",
      },
      {
        label: "Команда",
        href: "/about#team",
        icon: "tabler:users",
      },
    ],
  },
  {
    label: "Направления",
    href: "/directions",
    children: [
      {
        label: "Все направления",
        href: "/directions",
        icon: "tabler:layout-grid",
      },
      {
        label: "Зависимости",
        href: "/directions/addictions",
        icon: "tabler:unlink",
      },
      {
        label: "Созависимость",
        href: "/directions/codependency",
        icon: "tabler:heart-handshake",
      },
    ],
  },
  {
    label: "Материалы",
    href: "/materials",
  },
  {
    label: "Контакты",
    href: "/contacts",
  },
];

const navbarRef = ref<HTMLElement | null>(null);

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const mobileOpenSection = ref<string | null>(null);

function isActive(href: string) {
  if (href === "/") return route.path === "/";

  return route.path === href || route.path.startsWith(`${href}/`);
}

function closeMenu() {
  isMenuOpen.value = false;
  mobileOpenSection.value = null;
}

function toggleMobileSection(label: string) {
  mobileOpenSection.value = mobileOpenSection.value === label ? null : label;
}

const activeDropdown = ref<string | null>(null);
const lockedDropdown = ref<string | null>(null);

function openDropdown(label: string) {
  if (lockedDropdown.value === label) return;

  activeDropdown.value = label;
}

function leaveDropdown(label: string) {
  if (activeDropdown.value === label) {
    activeDropdown.value = null;
  }

  if (lockedDropdown.value === label) {
    lockedDropdown.value = null;
  }
}

function closeDropdown(label: string) {
  activeDropdown.value = null;
  lockedDropdown.value = label;
}

function handleDropdownFocusOut(event: FocusEvent) {
  const container = event.currentTarget;

  if (
    container instanceof HTMLElement &&
    !container.contains(event.relatedTarget as Node | null)
  ) {
    activeDropdown.value = null;
  }
}

function updateScroll() {
  isScrolled.value = window.scrollY > 20;
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeMenu();
    activeDropdown.value = null;
  }
}

function handleOutsideClick(event: PointerEvent) {
  if (
    isMenuOpen.value &&
    navbarRef.value &&
    event.target instanceof Node &&
    !navbarRef.value.contains(event.target)
  ) {
    closeMenu();
  }
}

function handleResize() {
  if (window.innerWidth >= 1280) {
    closeMenu();
  }
}

watch(
  () => route.fullPath,
  () => {
    closeMenu();
    activeDropdown.value = null;
  },
);

onMounted(() => {
  updateScroll();

  window.addEventListener("scroll", updateScroll, {
    passive: true,
  });

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("pointerdown", handleOutsideClick);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
  window.removeEventListener("keydown", handleKeydown);
  window.removeEventListener("pointerdown", handleOutsideClick);
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <header
    ref="navbarRef"
    class="fixed inset-x-0 top-0 z-50 pt-3 px-5 sm:px-8 md:px-[8%] lg:px-[9%]"
  >
    <div
      class="relative border-border/60 bg-bg shadow-s backdrop-blur-md flex items-center justify-between gap-5 rounded-2xl border px-4 py-3"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        aria-label="TANAIS — Главная"
        class="flex min-w-0 items-center gap-2.5"
        @click="closeMenu"
      >
        <img
          src="/img/logo.png"
          alt=""
          width="48"
          height="48"
          class="size-11 shrink-0 object-contain sm:size-12"
        />

        <div class="flex flex-col">
          <span
            class="font-heading text-base font-semibold leading-tight tracking-[0.12em] text-text sm:text-lg"
          >
            TANAIS
          </span>

          <span
            class="whitespace-nowrap text-xs leading-relaxed text-text-muted"
          >
            Центр психологической помощи
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop navigation -->
      <nav
        aria-label="Основная навигация"
        class="hidden items-center gap-8 xl:flex"
      >
        <div
          v-for="(item, index) in navItems"
          :key="item.label"
          class="group relative"
          @mouseenter="item.children && openDropdown(item.label)"
          @mouseleave="leaveDropdown(item.label)"
          @focusin="item.children && (activeDropdown = item.label)"
          @focusout="handleDropdownFocusOut"
        >
          <!-- With dropdown -->
          <template v-if="item.children">
            <NuxtLink
              :to="item.href"
              class="relative flex items-center gap-1.5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-primary"
              :class="
                isActive(item.href)
                  ? 'text-primary'
                  : 'text-text-muted hover:text-text'
              "
              :aria-current="route.path === item.href ? 'page' : undefined"
            >
              {{ item.label }}

              <Icon
                name="tabler:chevron-down"
                class="size-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
              />

              <span
                class="absolute bottom-0 left-0 h-px w-full origin-left bg-primary transition-transform duration-200"
                :class="
                  isActive(item.href)
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100'
                "
              />
            </NuxtLink>

            <!-- Dropdown -->
            <div
              :id="`desktop-dropdown-${index}`"
              class="absolute left-1/2 top-full z-20 w-76 -translate-x-1/2 pt-3 transition-[opacity_transform] duration-200"
              :class="
                activeDropdown === item.label
                  ? 'visible pointer-events-auto translate-y-0 opacity-100'
                  : 'invisible pointer-events-none translate-y-1 opacity-0'
              "
            >
              <div class="h-4" />
              <div class="rounded-2xl border border-border bg-bg p-2 shadow-l">
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.href"
                  :to="child.href"
                  @click="closeDropdown(item.label)"
                  class="group/item flex items-center gap-3 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-bg-light focus-visible:bg-bg-light focus-visible:outline-none"
                >
                  <div
                    class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary"
                  >
                    <Icon :name="child.icon" class="size-4" />
                  </div>

                  <span
                    class="text-sm text-text-muted transition-colors duration-200 group-hover/item:text-text"
                  >
                    {{ child.label }}
                  </span>

                  <Icon
                    name="tabler:arrow-up-right"
                    class="ml-auto size-4 text-primary/40 transition-colors duration-200 group-hover/item:text-primary"
                  />
                </NuxtLink>
              </div>
            </div>
          </template>

          <!-- Simple link -->
          <NuxtLink
            v-else
            :to="item.href"
            @click="closeDropdown(item.label)"
            class="relative block py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-primary"
            :class="
              isActive(item.href)
                ? 'text-primary'
                : 'text-text-muted hover:text-text'
            "
            :aria-current="route.path === item.href ? 'page' : undefined"
          >
            {{ item.label }}

            <span
              class="absolute bottom-0 left-0 h-px w-full origin-left bg-primary transition-transform duration-200"
              :class="
                isActive(item.href)
                  ? 'scale-x-100'
                  : 'scale-x-0 group-hover:scale-x-100'
              "
            />
          </NuxtLink>
        </div>
      </nav>

      <!-- Desktop CTA -->
      <NuxtLink
        to="/contacts"
        class="button button-primary group hidden shrink-0 xl:inline-flex"
      >
        Записаться

        <Icon
          name="tabler:arrow-up-right"
          class="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </NuxtLink>

      <!-- Mobile toggle -->
      <button
        type="button"
        class="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-border bg-bg-light text-text transition-colors duration-200 hover:bg-primary/10 hover:border-primary/30 focus-visible:outline-2 focus-visible:outline-primary xl:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        :aria-label="isMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <Icon
          :name="isMenuOpen ? 'tabler:x' : 'tabler:menu-2'"
          class="size-5"
        />
      </button>

      <!-- Mobile menu -->
      <Transition name="nav-panel">
        <nav
          v-show="isMenuOpen"
          id="mobile-navigation"
          data-lenis-prevent
          aria-label="Мобильная навигация"
          class="absolute left-0 right-0 top-[calc(100%+12px)] max-h-[calc(100dvh-110px)] overflow-y-auto rounded-2xl border border-border bg-bg p-3 shadow-l backdrop-blur-xl sm:rounded-3xl xl:hidden"
        >
          <div class="flex flex-col gap-1">
            <div v-for="(item, index) in navItems" :key="item.label">
              <!-- Mobile group -->
              <template v-if="item.children">
                <div
                  class="flex items-center rounded-xl transition-colors hover:bg-bg-light"
                >
                  <NuxtLink
                    :to="item.href"
                    class="flex-1 px-4 py-3 text-sm font-medium"
                    :class="isActive(item.href) ? 'text-primary' : 'text-text'"
                    @click="closeMenu"
                  >
                    {{ item.label }}
                  </NuxtLink>

                  <button
                    type="button"
                    class="flex size-11 items-center justify-center rounded-xl text-text-muted hover:text-primary"
                    :aria-expanded="mobileOpenSection === item.label"
                    :aria-controls="`mobile-submenu-${index}`"
                    :aria-label="`Развернуть: ${item.label}`"
                    @click="toggleMobileSection(item.label)"
                  >
                    <Icon
                      name="tabler:chevron-down"
                      class="size-5 transition-transform duration-200"
                      :class="
                        mobileOpenSection === item.label
                          ? 'rotate-180 text-primary'
                          : ''
                      "
                    />
                  </button>
                </div>

                <!-- Mobile submenu -->
                <Transition name="nav-submenu">
                  <div
                    v-show="mobileOpenSection === item.label"
                    :id="`mobile-submenu-${index}`"
                    class="ml-4 border-l border-border pl-3"
                  >
                    <NuxtLink
                      v-for="child in item.children"
                      :key="child.href"
                      :to="child.href"
                      class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-text-muted transition-colors duration-200 hover:bg-bg-light hover:text-text"
                      @click="closeMenu"
                    >
                      <Icon
                        :name="child.icon"
                        class="size-4 shrink-0 text-primary"
                      />

                      {{ child.label }}
                    </NuxtLink>
                  </div>
                </Transition>
              </template>

              <!-- Mobile simple link -->
              <NuxtLink
                v-else
                :to="item.href"
                class="block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-bg-light"
                :class="
                  isActive(item.href) ? 'bg-bg-light text-primary' : 'text-text'
                "
                @click="closeMenu"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>

          <!-- Mobile CTA -->
          <div class="mt-4 border-t border-border pt-4">
            <NuxtLink
              to="/contacts"
              class="button button-primary flex w-full justify-center"
              @click="closeMenu"
            >
              Записаться на консультацию

              <Icon name="tabler:arrow-up-right" class="size-4" />
            </NuxtLink>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.nav-panel-enter-active,
.nav-panel-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-panel-enter-from,
.nav-panel-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.nav-submenu-enter-active,
.nav-submenu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.nav-submenu-enter-from,
.nav-submenu-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

@media (prefers-reduced-motion: reduce) {
  .nav-panel-enter-active,
  .nav-panel-leave-active,
  .nav-submenu-enter-active,
  .nav-submenu-leave-active {
    transition: none;
  }
}
</style>
