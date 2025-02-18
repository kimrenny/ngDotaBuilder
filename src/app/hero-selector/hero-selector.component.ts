import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { BuilderService } from '../services/builder.service';

@Component({
  selector: 'app-hero-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-selector.component.html',
  styleUrl: './hero-selector.component.scss',
})
export class HeroSelectorComponent {
  heroesMap = {
    Abaddon: 'npc_dota_hero_abaddon',
    Alchemist: 'npc_dota_hero_alchemist',
    'Anti-Mage': 'npc_dota_hero_antimage',
    'Arc Warden': 'npc_dota_hero_arc_warden',
    Axe: 'npc_dota_hero_axe',
    Bane: 'npc_dota_hero_bane',
    Bloodseeker: 'npc_dota_hero_bloodseeker',
    Bristleback: 'npc_dota_hero_bristleback',
    'Centaur Warrunner': 'npc_dota_hero_centaur',
    'Crystal Maiden': 'npc_dota_hero_crystal_maiden',
    'Drow Ranger': 'npc_dota_hero_drow_ranger',
    'Ember Spirit': 'npc_dota_hero_ember_spirit',
    Enigma: 'npc_dota_hero_enigma',
    Hoodwink: 'npc_dota_hero_hoodwink',
    Huskar: 'npc_dota_hero_huskar',
    Invoker: 'npc_dota_hero_invoker',
    Juggernaut: 'npc_dota_hero_juggernaut',
    'Legion Commander': 'npc_dota_hero_legion_commander',
    Leshrac: 'npc_dota_hero_leshrac',
    Lina: 'npc_dota_hero_lina',
    Marci: 'npc_dota_hero_marci',
    Mars: 'npc_dota_hero_mars',
    'Monkey King': 'npc_dota_hero_monkey_king',
    Muerta: 'npc_dota_hero_muerta',
    "Nature's Prophet": 'npc_dota_hero_furion',
    'Ogre Magi': 'npc_dota_hero_ogre_magi',
    Pangolier: 'npc_dota_hero_pangolier',
    'Phantom Assassin': 'npc_dota_hero_phantom_assassin',
    'Primal Beast': 'npc_dota_hero_primal_beast',
    Puck: 'npc_dota_hero_puck',
    Pudge: 'npc_dota_hero_pudge',
    'Queen of Pain': 'npc_dota_hero_queenofpain',
    Razor: 'npc_dota_hero_razor',
    'Sand King': 'npc_dota_hero_sand_king',
    'Shadow Fiend': 'npc_dota_hero_nevermore',
    'Skywrath Mage': 'npc_dota_hero_skywrath_mage',
    Slark: 'npc_dota_hero_slark',
    Snapfire: 'npc_dota_hero_snapfire',
    Sniper: 'npc_dota_hero_sniper',
    Sven: 'npc_dota_hero_sven',
    'Templar Assassin': 'npc_dota_hero_templar_assassin',
    Terrorblade: 'npc_dota_hero_terrorblade',
    'Troll Warlord': 'npc_dota_hero_troll_warlord',
    'Void Spirit': 'npc_dota_hero_void_spirit',
    'Wraith King': 'npc_dota_hero_skeleton_king',
    Zeus: 'npc_dota_hero_zuus',
  };

  heroes = Object.keys(this.heroesMap);

  selectedHero: string | null = null;
  selectedHeroKey: string | null = null;
  dropdownOpen = false;

  constructor(private builderService: BuilderService) {}

  toggleDropdown(event: Event) {
    event?.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectHero(hero: string, event: Event) {
    event.stopPropagation();
    this.selectedHeroKey = hero;
    this.selectedHero =
      this.heroesMap[hero as keyof typeof this.heroesMap] || null;
    this.dropdownOpen = false;

    if (this.selectHero !== null) {
      this.builderService.getHeroBuild(this.selectedHero as string);
    }
  }

  @HostListener('document:click') closeDropdown() {
    this.dropdownOpen = false;
  }
}
