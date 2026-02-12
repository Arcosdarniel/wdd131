const listClass = [
    {
        icon: "images/icons/unholyDeathKnight.jpg",
        nameClass: "Death Knight",
        especiality: "Unholy",
        rol: "DPS",
        description: "Unholy has undergone a massive 360-degree rework for the upcoming expansion. The clunky Festering Wound system has been completely removed in favor of a more fluid, summon-focused playstyle. You now command a swarm of Lesser Ghouls and benefit from smart disease spreading that reduces tedious setup. With the addition of Putrefy as a brand new minor cooldown, the spec feels faster and more modern, offering the most significant rotational and visual overhaul the class has seen in over a decade.",
        tier: "S",
        fullInfo: {
            titleInfo1: "Mechanical Shift: From Wounds to Ghoul Summons",
            info1: "Core Mechanical Rework & Minion Management The Midnight pre-patch introduces a fundamental shift for Unholy Death Knights with the total removal of Festering Wounds. This veteran mechanic is replaced by a personal buff system: Festering Strike now builds stacks on the player, which Scourge Strike consumes to summon a constant stream of lesser ghouls. The rotation is now anchored by Putrefy, a new ability that summons ghouls to leap at targets and explode. This is heavily augmented by talents like Reanimation, which guarantees Magus of the Dead summons, and Blightburst, which turns ghoul explosions into disease catalysts. Disease gameplay is further deepened by the Dread Plague, a potent single-target infection, and Pestilence, a high-skill expression talent that allows you to consume remaining plague durations for massive burst damage during Dark Transformation windows.",
            titleInfo2: "AoE Evolution: Ranged Versatility and Mobility",
            info2: "AoE Overhaul & Ranged Versatility The spec’s approach to multi-target combat has been completely reimagined by decoupling AoE from Death and Decay. Through the reworked Clawing Shadows and Scourging talents, Scourge Strike now passively cleaves up to six targets, eliminating the frustration of tanks moving enemies out of ground effects. This change, combined with a default 30-yard range on Scourge Strike, allows the Unholy DK to function effectively as a mid-range caster-melee hybrid. Ranged efficiency is further boosted as Sudden Doom now triggers from Dread Plague ticks rather than auto-attacks, and Unholy Aura scales with minion summons. While the removal of Apocalypse and Unholy Assault simplifies the setup, the new kit offers a more fluid 'Necromancer' experience focused on infectious chain reactions and a relentless army of the dead"

        },
    },
    {
        icon: "images/icons/frostDeathKnight.jpg",
        nameClass: "Death Knight",
        especiality: "Frost",
        rol: "DPS",
        description: "Frost remains a powerhouse of burst and high-impact physical-frost hybrid damage. Whether opting for the 'Breath of Sindragosa' build for long-window rewarded gameplay or the 'Obliteration' build for massive, consistent procs, the spec excels at priority target damage. Its strength lies in its simplicity and the sheer weight of its hits, supported by a robust defensive kit that allows it to ignore many movement-impairing effects while staying glued to the target.",
        tier: "B",
        fullInfo: {
            titleInfo1: "Flow Optimization and Base Damage",
            info1: "In the Midnight pre-patch, Frost Death Knights benefit from a much smoother and more balanced gameplay loop. The most significant change is that Obliterate now deals a portion of Frost damage by default, effectively bridging the gap between standard hits and Killing Machine procs. Additionally, making Empower Rune Weapon instant—removing its projectile travel time—eliminates the annoying delay in resource generation, making the rotation feel responsive and precise. Dual-wield builds also see a major boost in single-target viability thanks to the massive damage buff to Frostbane.",
            titleInfo2: "Class Tree Restructuring",
            info2: "The Death Knight class tree has been reorganized to improve accessibility and introduce new defensive options like Blood Bond and Death Defiance. While Soul Reaper has moved to the Unholy tree, Frost players now have an easier path to utility and mobility talents such as Wraith Walk and Asphyxiate. Despite minor nerfs to the defensive power of Death Strike and Unholy Endurance, the new tree layout is more flexible, allowing for better talent synergy and a more reliable flow heading into the new expansion."
        }
    },
    {
        icon: "images/icons/bloodDeathKnight.jpg",
        nameClass: "Death Knight",
        especiality: "Blood",
        rol: "Tank",
        description: "Often described as the most 'proactive' tank, Blood Death Knights don't just mitigate damage—they undo it. By mastering the Runic Power economy, they use Death Strike to heal back massive portions of damage taken within a 5-second window. The spec requires careful management of Bone Shield stacks and high-value cooldowns like Dancing Rune Weapon, making it a master of self-sustainability that can often survive even when healers are down.",
        fullInfo: {
            titleInfo1: "Hero Talents and Mechanical Complexity",
            info1: "The Midnight pre-patch limits Hero Talent selection to nine nodes, with Deathbringer currently outperforming San'layn due to tuning and bugs. The removal of Soul Reaper simplifies the core rotation, while the redesigned Consumption shifts the complexity of San'layn to the post-Dancing Rune Weapon window. Most new effects are passive, but the loss of previous tier set synergies is noticeable.",
            titleInfo2: "Survival Decimation and Utility Shifts",
            info2: "Blood DK survivability has been heavily reduced, losing core defensives like Tombstone, Bonestorm, and Rune Tap, alongside nerfs to Death Strike and Dancing Rune Weapon. While base armor buffs and new talents like Blood Mist attempt to compensate, the spec feels significantly more vulnerable. Utility is also more rigid now that Gorefiend's Grasp and Abomination Limb share a choice node."
        }
    },
    {
        icon: "images/icons/armsWarrior.jpg",
        nameClass: "Warrior",
        especiality: "Arms",
        rol: "DPS",
        description: "Arms is a methodical, tactical spec that revolves around the management of Overpower and Mortal Strike. It excels in execution phases and multi-target 'cleave' scenarios via Sweeping Strikes. With the 'Colossus' hero talents, the spec gains even more weight behind its hits, punishing enemies with massive, calculated strikes that ignore large portions of armor while maintaining a dominant battlefield presence.",
        tier: "B",
        fullInfo: {
            titleInfo1: "Rotational Consistency and Rage Economy",
            info1: "The Arms Warrior rotation becomes more predictable with Tactician now triggering consistently from all abilities, and the removal of Juggernaut simplifying Execute windows. However, a 30% reduction in Rage generation introduces more downtime, making external buffs like Shaman's Skyfury highly valuable. Additionally, Mastery has been reworked to provide a flat damage increase with two-handed weapons, decoupling it from the Deep Wounds mechanic.",
            titleInfo2: "Enhanced Survivability and Tactical Utility",
            info2: "Warriors receive significant defensive buffs, including doubled healing from Second Wind when low on health and a stronger Defensive Stance through Stance Mastery. Group utility also sees quality-of-life improvements: Rallying Cry is more effective in small groups, and Wrecking Throw can now act as a ranged silence. While Sweeping Strikes shifts to a charge system to prevent wasted cleave, the overall kit feels more robust for both solo and group play."
        }
    },
    {
        icon: "images/icons/furyWarrior.jpg",
        nameClass: "Warrior",
        especiality: "Fury",
        rol: "DPS",
        description: "Fury is the embodiment of berserker rage, defined by an incredibly high Actions-Per-Minute (APM) requirement. It focuses on generating Rage through Bloodthirst and Raging Blow to unleash powerful Rampage windows. Its strength lies in its relentless pace and high self-healing through Enraged Regeneration, making it a dominant force in fast-paced encounters where aggression is rewarded.",
        tier: "S",
        fullInfo: {
            titleInfo1: "Rotational Tweaks and Transmog Quality of Life",
            info1: "Fury gameplay remains consistent with The War Within, though a 15% reduction in Rage generation slightly lowers Rampage frequency. A major cosmetic update replaces Single-Minded Fury with a passive that allows Titan's Grip users to transmog one-handed weapons, finally solving the long-standing weapon disparity. While the loss of previous tier sets reduces Sudden Death procs, the new inclusion of Deep Wounds encourages a more regular and rewarding use of Execute.",
            titleInfo2: "Survival Buffs and Group Utility Enhancements",
            info2: "Warriors gain significant self-sustain through an upgraded Second Wind and more powerful damage reduction from Stance Mastery. Utility is also polished: Rallying Cry is now more impactful in smaller groups, and Wrecking Throw gains a ranged silence component via the Javelineer talent. Additionally, changes to PvE stun diminishing returns and a movement speed buff added to Piercing Howl help improve the flow between combat encounters."
        }
    },
    {
        icon: "images/icons/protectionWarrior.jpg",
        nameClass: "Warrior",
        especiality: "Protection",
        rol: "Tank",
        description: "Protection Warriors are the masters of physical mitigation. Using Shield Block and Ignore Pain, they can effectively nullify massive melee hits that would crush other tanks. Their toolkit is built for control, utilizing Shockwave and Spell Reflection to dictate the flow of battle. They remain the gold standard for tanks who want to feel like an unbreakable wall on the front lines against any physical threat.",
        fullInfo: {
            titleInfo1: "Talent Reorganization and Heroic Enhancements",
            info1: "Protection Warriors remain mechanically stable but benefit from a significant talent tree reorganization. Mountain Thane and Colossus Hero Trees gain new depth, focusing on increased Avatar uptime and bleed amplification via Deep Wounds. Notable changes include Ravager significantly buffing Thunder Clap and Revenge damage while active, and Anger Management now requiring double the Rage per second of cooldown reduction, demanding more aggressive resource management.",
            titleInfo2: "Utility Buffs and Defensive Integration",
            info2: "Survivability sees a streamline with Last Stand now acting as a passive trigger alongside Shield Wall, and Stance Mastery boosting Defensive Stance's value. Utility is greatly improved for group play: Rallying Cry provides a 50% larger health bonus outside of raids, Taunt has doubled duration and increased threat, and the new Javelineer talent provides a much-needed ranged interrupt. Additionally, Piercing Howl now serves as a minor movement speed buff for allies, aiding in pull efficiency."
        }
    },
    {
        icon: "images/icons/retributionPaladin.jpg",
        nameClass: "Paladin",
        especiality: "Retribution",
        rol: "DPS",
        description: "Retribution Paladins are the masters of 'mid-range melee,' capable of dealing high damage from several yards away. After its recent reworks, the spec boasts one of the most cohesive talent trees in the game, balancing massive AoE burst with the iconic 'Execution Sentence' single-target windows. Between Divine Toll and the survivability of Shield of Vengeance, Retribution offers a flashy, high-utility playstyle.",
        tier: "A",
        fullInfo: {
            titleInfo1: "Hammer of Wrath Integration and Burst Windows",
            info1: "Retribution sees a significant mechanical consolidation: Hammer of Wrath is no longer a separate button, but instead upgrades your Judgment during Avenging Wrath, inheriting all talent buffs. Execution Sentence now incorporates the effects of Final Reckoning, shifting the spec toward powerful 1-minute burst windows. While Holy Power generation is slightly lower due to talent nerfs, the overall rotation feels more impactful and less cluttered.",
            titleInfo2: "Aura Reworks and Defensive Utility",
            info2: "The Paladin class tree introduces new utility like 'Fear No Evil', which drastically reduces fear duration during wings. Defensive staples like Blessing of Dusk/Dawn have been redesigned for better passive damage reduction and group support. Additionally, Shield of Vengeance has moved to the class tree and synergizes with Divine Protection, reinforcing Retribution's identity as one of the sturdiest DPS specs in the game."
        }
    },
    {
        icon: "images/icons/protectionPaladin.jpg",
        nameClass: "Paladin",
        especiality: "Protection",
        rol: "Tank",
        description: "Protection Paladins are the utility kings of the tanking world. Their core gameplay revolves around standing within their Consecration to maintain damage reduction while rotating Holy Power into Shield of the Righteous. They provide unparalleled group support through Word of Glory off-healing and multiple 'Blessing' spells that can cheese raid mechanics or save allies from certain death.",
        fullInfo: {
            titleInfo1: "Vanguard Mechanics and Shield Synergy",
            info1: "Protection Paladin gains the 'Glory of the Vanguard' Apex system, allowing Judgment to empower Avenger's Shield into a massive linear AoE attack that generates Holy Power. The Templar tree remains the dominant choice for pre-patch, featuring the new Divine Hammer passive that triggers hammers to spin around the Paladin after using Divine Toll. These changes emphasize a 'baseline stability' playstyle that rewards consistent Holy Power spending.",
            titleInfo2: "Defensive Passives and Group Support",
            info2: "Survivability is bolstered by the integration of Last Stand as a passive effect when casting Shield Wall, ensuring high-mitigation windows are easier to manage. Taunt duration has been doubled to 6 seconds with increased threat, making positioning more forgiving. Utility remains top-tier with Blessing of Spellwarding and the new Javelineer talent, providing Protection Paladins with a reliable ranged silence and interrupt tool."
        }
    },
    {
        icon: "images/icons/holyPaladin.jpg",
        nameClass: "Paladin",
        especiality: "Holy",
        rol: "Healer",
        description: "Holy Paladins operate as 'Battle-Healers,' staying in melee range to generate Holy Power through Crusader Strike and Judgment. This resource is then spent on instant-cast heals like Light of Dawn or Word of Glory. Their gameplay is built around high-cooldown windows like Avenging Wrath, where they become nearly unstoppable, providing both massive healing throughput and significant damage contribution.",
        fullInfo: {
            titleInfo1: "Herald of the Sun and Dawnlight Synergy",
            info1: "Holy Paladin leans heavily into the Herald of the Sun hero tree, where casting Holy Shock after Avenging Wrath triggers 'Walk Into Light', generating massive Holy Power and guaranteeing healing procs. Crusader Strike has been removed (unless talented into Avenging Crusader), shifting the focus toward Holy Shock and Judgment as the primary rotational drivers. This 'smart' healing style excels at smoothing out group damage without constant target swapping.",
            titleInfo2: "Lightsmith Armaments and Rotational Flow",
            info2: "The Lightsmith tree introduces 'Reflection of Radiance', enhancing the healing output of Hammer and Anvil. Despite some late pre-patch reverts to the core rotation, Holy Paladin remains a powerhouse in Mythic+ due to the 4-piece tier set bonus that transfers Holy Shock healing into Beacon of Light. With Divine Toll and Holy Prism now sharing a choice node, players must choose between massive burst healing or sustained group maintenance."
        }
    },
    {
        icon: "images/icons/beastMasteryHunter.jpg",
        nameClass: "Hunter",
        especiality: "Beast Mastery",
        rol: "DPS",
        description: "Beast Mastery is the only ranged spec in the game that can perform its entire rotation while moving. By commanding two primary pets and a menagerie of dire beasts, it delivers consistent damage with no casting times. It is the king of solo content and provides essential utility through Bloodlust and various pet-based crowd control, making it a reliable pick for any environment.",
        tier: "D",
        fullInfo: {
            titleInfo1: "Frenzy Rework and Beast Integration",
            info1: "Beast Mastery sees a fundamental shift with the removal of the active Frenzy stacking mechanic, now replaced by a passive talent providing a static 40% pet attack speed buff. The rotation is further streamlined as Bestial Wrath now sits on a fixed 30-second cooldown. A major addition is 'Wild Thrash', which replaces Multi-Shot to provide a more powerful and active AoE Kill Command experience, while the return of the Stampede mechanic during Bestial Wrath windows ensures high-pressure burst every 30 seconds.",
            titleInfo2: "Utility Consolidation and Raid Value",
            info2: "Hunters have become indispensable in raids thanks to Hunter's Mark now providing a universal 3% damage increase on single targets. Defensively, Aspect of the Turtle is significantly stronger, offering up to 50% damage reduction via talents. While several niche utility traps like Implosive and High Explosive have been removed, Intimidation has been buffed to serve as a reliable solo or AoE stun, and Roar of Sacrifice is now a versatile external defensive for allies."
        }

    },
    {
        icon: "images/icons/marksmanshipHunter.jpg",
        nameClass: "Hunter",
        especiality: "Marksmanship",
        rol: "DPS",
        description: "Marksmanship focuses on the 'lone wolf' fantasy, dealing massive burst damage from extreme ranges. Its gameplay revolves around the Precise Shots mechanic and the powerful Aimed Shot cast. In AoE scenarios, Trick Shots allows their arrows to ricochet between targets, making them masters of high-burst priority target destruction and long-range orbital bombardment.",
        tier: "C",
        fullInfo: {
            titleInfo1: "The Sniper Identity and Cast Management",
            info1: "Marksmanship has been redesigned to emphasize its 'Sniper' fantasy, removing the Streamline mechanic and significantly increasing Aimed Shot's base cast time to 2.5 seconds. To compensate, Aimed Shot damage has been massively buffed, rewarding deliberate positioning. The removal of Explosive Shot reduces button bloat, while the new 'Headshot' talent introduces a stacking debuff that rewards consistent focus on a single target, making the spec a premier choice for priority damage and execution.",
            titleInfo2: "Sentinel Mastery and Precision Utility",
            info2: "The Sentinel Hero Tree has been reworked to focus on 'Spotter’s Mark', enhancing proc chances and critical strike damage rather than stacking implosion debuffs. Utility-wise, Marksmanship benefits from the class-wide Hunter’s Mark buff and a revamped Counter Shot that now provides a 5-second spell lock. Mobility is addressed through the new 'Quick Draw' node, which grants a 50% movement speed burst after casting Aimed Shot, helping to mitigate the spec's longer stationary windows."
        }
    },
    {
        icon: "images/icons/survivalHunter.jpg",
        nameClass: "Hunter",
        especiality: "Survival",
        rol: "DPS",
        description: "Survival is a unique hybrid melee spec that uses a polearm alongside bombs and pet commands. It features high mobility with Harpoon and rewards players for managing the Wildfire Bomb cooldown and Mongoose Bite windows. It is a frantic, explosive playstyle that stands out as the most unconventional spec in the Hunter's toolkit, blending explosives with coordinated animal attacks.",
        tier: "S",
        fullInfo: {
            titleInfo1: "Explosive Loops and Melee Versatility",
            info1: "Survival undergoes a significant rotational cleanup with the removal of Explosive Shot to reduce bloat, replaced by a tight feedback loop between 'Boomstick' and Wildfire Bomb. Each shot reduces the bomb's cooldown, and vice-versa, creating a frantic and explosive rhythm. The spec currently stands as one of the strongest AoE performers in the pre-patch, offering high sustained damage and a 1-minute burst profile that aligns perfectly with the current dungeon meta.",
            titleInfo2: "Melee-Caster Hybrid and Defensive Buffs",
            info2: "Despite being a melee spec, Survival's identity as a hybrid is strengthened by improved range on utility and high mobility tools. Defensively, the spec benefits from the universal buff to Exhilaration (now a flat 1-minute cooldown) and a buffed Aspect of the Cheetah. While it shares the new 3% Hunter's Mark raid buff, Survival also gains niche advantages like 'Muzzle' providing a 5-second silence and 'Freezing Trap' applying a heavy 70% slow after the effect breaks, aiding in crowd control."
        }
    },
    {
        icon: "images/icons/assassinationRogue.jpg",
        nameClass: "Rogue",
        especiality: "Assassination",
        rol: "DPS",
        description: "Assassination Rogues are masters of toxins and surgical strikes. They focus on maintaining Rupture and Garrote bleeds while applying deadly poisons. Their gameplay is methodical, prioritizing the management of Damage-over-Time effects and using Deathmark to melt high-priority targets during burst phases, ensuring their victims suffer a slow, inevitable demise.",
        tier: "D",
        fullInfo: {
            titleInfo1: "Bleed Synergy and Deathstalker Precision",
            info1: "Assassination's gameplay is now heavily centered on the 'Deathstalker' Hero Tree, where using Ambush or Mutilate from Stealth applies 'Deathstalker's Mark'. This mark causes your finishers to deal massive Shadow damage and increases the potency of your bleeds. The rotation feels more fluid thanks to the removal of 'Internal Bleeding' as a separate debuff, integrating its damage directly into Rupture, which simplifies the target tracking while maintaining high sustained pressure.",
            titleInfo2: "Vanish Windows and Poison Utility",
            info2: "The spec gains significant power from the new 'Caustic Mixture' talent, which allows poisons to deal bonus damage based on the number of bleed effects on the target. Vanish has been shortened to a 1.5-minute cooldown, making it a more frequent offensive tool for reapplying empowered Garrotes. Defensively, Elusiveness now provides a stronger damage reduction, and Cloak of Shadows includes a brief 20% physical damage reduction, making Assassination more resilient during high-damage windows."
        }
    },
    {
        icon: "images/icons/outlawRogue.jpg",
        nameClass: "Rogue",
        especiality: "Outlaw",
        rol: "DPS",
        description: "Outlaw is a high-speed duelist that relies on the Roll the Bones mechanic to gain random combat buffs. With the use of Pistol Shots and Between the Eyes, they maintain a relentless offensive pressure. It is one of the most APM-intensive specs in the game, rewarding quick thinking and fast reactions to keep 'Adrenaline Rush' active through Restless Blades.",
        tier: "C",
        fullInfo: {
            titleInfo1: "Crackshot Dominance and Bullet Management",
            info1: "Outlaw remains the fastest-paced spec in the game, doubling down on the 'Crackshot' playstyle where Between the Eyes has no cooldown during Stealth or Shadow Dance. The new 'Flintlock’s Gamble' talent replaces several minor passives, offering a chance for Pistol Shot to reset the cooldown of Adrenaline Rush. While the RNG of Roll the Bones is still present, the 'Keep It Rolling' talent has been buffed to extend buffs more reliably, reducing the frustration of low-value rolls.",
            titleInfo2: "AoE Cleave and Mobility Enhancements",
            info2: "Blade Flurry's range has been increased to 10 yards, and its initial strike now applies 'Sinister Strike' to all targets, providing a massive burst of Holy Power-like energy at the start of pulls. Utility is bolstered by 'Gouge' returning to the baseline kit for all Rogues, but Outlaw specifically benefits from 'Improved Grappling Hook', which now has two charges. This extreme mobility, combined with a 5-second silence on Kick, makes Outlaw a premier pick for Mythic+ control.",
        }
    },
    {
        icon: "images/icons/subtletyRogue.jpg",
        nameClass: "Rogue",
        especiality: "Subtlety",
        rol: "DPS",
        description: "Subtlety Rogues dance in and out of the shadows, utilizing multiple Shadow Dance windows to unleash flurry of Eviscerates and Gloom Blades. They excel at 'funnel' damage, turning multi-target scenarios into massive single-target burst through Secret Technique. It is a spec of precision and timing, demanding perfect control over stealth resources and dance windows.",
        tier: "B",
        fullInfo: {
            titleInfo1: "Void-Infused Shadow Techniques",
            info1: "Subtlety embraces the theme of Midnight by integrating Void damage into its core kit via the 'Trickster' Hero Tree. Secret Technique has been redesigned to deal 50% Shadow damage, bypassing armor, while Eviscerate now has a chance to trigger 'Void Strike', a powerful single-target execute. The management of Shadow Dance charges is more forgiving as 'Deep Shadows' now reduces its cooldown by 2 seconds for every combo point spent, allowing for higher uptime on its dance windows.",
            titleInfo2: "Stealth Utility and Defensive Scaling",
            info2: "The spec’s utility is enhanced by 'Shrouded In Darkness', which grants the entire group a 10% movement speed buff while inside Shroud of Concealment. Subtlety's survivability is top-tier due to 'Soothing Darkness' healing for significantly more during the pre-patch. Additionally, the new 'Phantom Assault' talent allows for a 30-yard range on Shadowstrike, turning the Rogue into a highly mobile assassin that can reposition across the battlefield instantly while maintaining its offensive pressure.",
        }
    },
    {
        icon: "images/icons/disciplinePriest.jpg",
        nameClass: "Priest",
        especiality: "Discipline",
        rol: "Healer",
        description: "Discipline is a unique healer that prevents damage by dealing it. Through the Atonement mechanic, damage dealt by the Priest heals all allies marked with the buff. It requires high encounter knowledge to 'ramp' up shields before massive damage hits, making it one of the most rewarding and strategically deep healers in the game for proactive players.",
        fullInfo: {
            titleInfo1: "Atonement Rework and Void-Empowered Healing",
            info1: "Discipline undergoes a mechanical shift with the integration of the 'Voidweaver' Hero Tree, where Mind Blast now has a chance to trigger Entropic Rift, a void singularity that deals damage and heals allies through Atonement. Power Word: Shield's duration has been increased, but its cooldown is slightly longer, emphasizing a playstyle that rewards proactive shielding followed by intense damage windows. The removal of 'Schism' as a separate button—now a passive effect of Mind Blast—significantly reduces button bloat while maintaining burst potential.",
            titleInfo2: "Utility and Damage Mitigation",
            info2: "Utility is bolstered by the new 'Sanctuary of Light' talent, which allows Power Word: Barrier to slightly increase the healing received by those inside. Leap of Faith now grants the target a small absorption shield, making it a more effective rescue tool. Additionally, the spec benefits from the class-wide return of 'Mind Games' as a talent choice, providing a unique niche for disrupting enemy healing in both PvP and high-end Mythic+ content."
        }
    },
    {
        icon: "images/icons/holyPriest.jpg",
        nameClass: "Priest",
        especiality: "Holy",
        rol: "Healer",
        description: "Holy is the quintessential reactive healer. Utilizing a kit of powerful 'Holy Word' spells, they can instantly top off an ally's health or provide massive group stabilization. With a focus on direct, potent spells and miracles, they are capable of handling any damage pattern the game throws at them, serving as the pure beacon of restorative light in any raid.",
        fullInfo: {
            titleInfo1: "Archangel Ascension and Miraculous Synergy",
            info1: "Holy Priest focuses on the 'Archangel' Hero Tree, which introduces a new cooldown that empowers Holy Words to reset more quickly and deal extra damage or healing. The synergy between Flash Heal and Holy Word: Serenity has been strengthened, making the 'miracle' healing windows more frequent. Prayer of Mending now has a 10% chance to not consume a charge when it jumps, providing a significant boost to passive group sustain during high-damage encounters.",
            titleInfo2: "Reactive Defensives and Raid Utility",
            info2: "Defensively, Holy gains 'Divine Image' as a more consistent passive, with the naaru projection now mimicking a wider variety of spells. Symbol of Hope has been redesigned to restore 15% of missing primary resources to the raid, making it a critical utility for healers and mana-hungry DPS. The addition of 'Angelic Bulwark' as a baseline talent provides a reliable auto-shield when falling below 30% health, addressing the spec's historical vulnerability to sudden bursts."
        }
    },
    {
        icon: "images/icons/shadowPriest.jpg",
        nameClass: "Priest",
        especiality: "Shadow",
        rol: "DPS",
        description: "Shadow Priests harness the power of the Void to melt minds and spirits. Their gameplay revolves around the Insanity resource and entering Voidform to unleash devastating Devouring Plagues. They excel at multi-dotting and provide legendary utility with Power Infusion and Vampiric Embrace, making them a high-demand spec that excels in both single-target and spread-pressure scenarios.",
        tier: "B",
        fullInfo: {
            titleInfo1: "Void Eruption and Entropic Chain Reactions",
            info1: "Shadow Priests embrace the void themes of Midnight with a reworked Voidform that no longer drains Insanity but operates on a fixed 20-second duration. The 'Oracle' Hero Tree introduces 'Premonition', a versatile buff that can be cycled to increase damage, reduce cast times, or provide resource generation. Mind Spike has been removed in favor of a buffed Mind Flay that can be channeled while moving during Voidform, solving many of the spec's historical mobility issues during peak damage windows.",
            titleInfo2: "Infectious Spread and Crowd Control",
            info2: "AoE damage is now more intuitive through the 'Shadowy Insight' rework, allowing Mind Blast to spread Shadow Word: Pain to nearby targets automatically. Utility is enhanced by the return of 'Silence' to a more accessible spot in the talent tree and a new 'Psychic Link' modifier that allows single-target spells to cleave more effectively. Survivability is also improved via 'Vampiric Embrace' now providing a small, permanent leech buff to the Priest, ensuring consistent self-sustain."
        }
    },
    {
        icon: "images/icons/elementalShaman.jpg",
        nameClass: "Shaman",
        especiality: "Elemental",
        rol: "DPS",
        description: "Elemental Shamans command the fury of the storm and the earth. By chaining Lava Bursts and Chain Lightnings, they generate Maelstrom for massive Earth Shocks or Earthquakes. The spec is famous for its 'Mastery: Elemental Overload' which causes spells to cast a second time for free, leading to some of the most satisfying visual procs and lightning-filled combat in the game.",
        tier: "C",
        fullInfo: {
            titleInfo1: "Stormspeaker Ascendance and Overload Mastery",
            info1: "Elemental sees a major shift with the 'Stormspeaker' Hero Tree, which transforms your Mastery into a more explosive mechanic. Lightning Bolt now has a chance to trigger a 'Chain Overload', causing multiple echoes to strike the target simultaneously. The removal of 'Icefury' as a mandatory button simplifies the rotation, allowing players to focus on a high-voltage lightning build or a reworked lava-burst profile that synergizes with the new 'Volcanic Surge' talent for massive single-target crits.",
            titleInfo2: "Mobility and Totemic Utility",
            info2: "Spiritwalker's Grace now has its cooldown reduced by spending Maelstrom, providing Elemental with much-needed mobility during movement-heavy encounters. A new utility node, 'Totemic Projection', is now baseline, allowing you to relocate any active totem without wasting a global cooldown. Additionally, Earthquake has been buffed to deal its damage 20% faster, making it far more effective against packs of mobs that are constantly being moved by tanks in Mythic+."
        }
    },
    {
        icon: "images/icons/enhancementShaman.jpg",
        nameClass: "Shaman",
        especiality: "Enhancement",
        rol: "DPS",
        description: "Enhancement is a fast-paced melee fighter that imbues its weapons with elemental power. It uses a priority-based system driven by Maelstrom Weapon stacks, which allow for instant-cast spells. Between Stormstrike and Lava Lash, the spec feels like a constant storm of strikes, rewarding players who can keep up with its chaotic and high-damage rotation.",
        tier: "A",
        fullInfo: {
            titleInfo1: "Totemic Might and Physical-Elemental Hybridization",
            info1: "Enhancement embraces the 'Totemic' Hero Tree, where dropping a Windfury Totem now summons a 'Surging Totem' that automatically strikes nearby enemies with physical and nature damage. The spec feels less cluttered as 'Lava Lash' and 'Stormstrike' have been better integrated: using one now significantly buffs the next cast of the other. Maelstrom Weapon stacks now cap at 10 but provide a much larger damage bonus to Lightning Bolt and Chain Lightning, rewarding players who manage their resources without overcapping.",
            titleInfo2: "Defensive Reinforcements and Group Buffs",
            info2: "Survival is greatly improved with 'Nature's Guardian' now triggering more reliably and a new talent, 'Stoneform Totem', which provides a small absorption shield to the party. Enhancement remains the king of melee utility; Windfury Totem's range has been increased to 40 yards, and 'Ancestral Guidance' has been slightly buffed to provide better off-healing during high-pressure raid windows. The return of 'Grounding Totem' as a choice node in the class tree also adds a layer of protection against powerful caster mechanics."
        }
    },
    {
        icon: "images/icons/restorationShaman.jpg",
        nameClass: "Shaman",
        especiality: "Restoration",
        rol: "Healer",
        description: "Restoration Shamans are the masters of stacked healing. Using Healing Rain and Chain Heal, they provide incredible throughput when the group is gathered. Their Mastery: Deep Healing makes them 'clutch' healers, as their spells become more powerful as the target's health drops, and their Spirit Link Totem remains one of the best raid-saving cooldowns in game history.",
        fullInfo: {
            titleInfo1: "Ancestral Awakening and Riptide Synergy",
            info1: "Restoration's healing profile is now anchored by the 'Farseer' Hero Tree, which allows you to summon Ancestral Spirits that mimic your healing spells. Riptide has become even more central to the kit, as 'High Tide' now triggers after consuming a set amount of Riptide charges rather than mana spent. This makes the healing flow more rhythmic and less dependent on mana-intensive spamming. Chain Heal also sees a buff, with its jump range increased to 15 yards, making it much more effective in spread-out raid groups.",
            titleInfo2: "Mana Management and Reactive Defensives",
            info2: "Mana Tide Totem has been redesigned to also grant a small Haste buff to the raid, increasing its value as a utility cooldown. Defensively, Restoration gains 'Astral Shift' enhancements that allow for casting while suppressed, and 'Earth Shield' can now be applied to two targets simultaneously without needing a specific legendary effect. The addition of 'Poison Cleansing Totem' to the base kit for all healers helps Restoration maintain its status as a utility powerhouse in dungeons with heavy debuff mechanics."
        }
    },
    {
        icon: "images/icons/arcaneMage.jpg",
        nameClass: "Mage",
        especiality: "Arcane",
        rol: "DPS",
        description: "Arcane is a spec of extreme management, requiring players to balance Mana and Arcane Charges. Its 'Burn' and 'Conserve' phases have been modernized, allowing for a devastating burst window involving Touch of the Magi and Arcane Surge. It is the ultimate 'thinking man's' caster, rewarding perfect execution with unparalleled single-target numbers and temporal trickery.",
        tier: "B",
        fullInfo: {
            titleInfo1: "Sunfury Integration and Mana Loop Refinement",
            info1: "Arcane has been significantly streamlined through the 'Sunfury' Hero Tree, which replaces the clunky 'Radiant Spark' setup with a more intuitive 'Arcane Phoenix' summon. When you spend enough Mana during Arcane Power, a Phoenix appears to duplicate your spells and burn targets. The rotation now focuses on a smoother 'Burn and Conserve' cycle, where Arcane Barrage no longer clears all Charges but instead has a chance to trigger 'Clearcasting', making the spec feel less punishing during movement.",
            titleInfo2: "Gravity Utility and Defensive Displacement",
            info2: "Utility is enhanced by the new 'Gravity Well' talent, which allows your Gravity Lapse to pull enemies toward its center rather than just stunning them. Displacement has returned as a baseline ability, allowing Mages to blink back to their original position and heal for a percentage of the damage taken. Additionally, Arcane Intellect now provides a small bonus to Mana regeneration for the entire group, reinforcing the Mage's role as a vital raid support."
        }
    },
    {
        icon: "images/icons/fireMage.jpg",
        nameClass: "Mage",
        especiality: "Fire",
        rol: "DPS",
        description: "Fire Mages thrive on critical strikes and rapid-fire execution. The gameplay centers on the Combustion window, where every spell becomes a guaranteed crit, allowing for chains of instant Pyroblasts. With high mobility through Shimmer and a focus on 'Hot Streak' procs, Fire remains one of the most explosive and satisfying specs for players who love seeing high-speed ignite damage.",
        tier: "D",
        fullInfo: {
            titleInfo1: "Spellslinger Precision and Combustion Flow",
            info1: "Fire Mages embrace the 'Spellslinger' Hero Tree, which focuses on 'Splintering Sorcery'. Each time you land a Critical Strike with Pyroblast or Fire Blast, a Frost-Fire splinter is created, dealing delayed damage and increasing the target's damage taken from your next Ignite. Combustion’s cooldown is more manageable now that 'Kindling' has been buffed to provide a flat reduction on every Fire Blast cast, ensuring the spec remains the king of high-impact, 1-minute burst windows.",
            titleInfo2: "Phoenix Flames and Cauterize Buffs",
            info2: "Phoenix Flames has been reworked to act as a primary resource generator that spreads Ignite more effectively in AoE scenarios. Defensively, Cauterize now grants a 5-second window of 30% increased movement speed, allowing for better repositioning after a near-death proc. The addition of 'Blazing Soul' to the class tree makes Blazing Barrier much more consistent, automatically refreshing its duration whenever you use Blink or Shimmer."
        }
    },
    {
        icon: "images/icons/frostMage.jpg",
        nameClass: "Mage",
        especiality: "Frost",
        rol: "DPS",
        description: "Frost Mages are the masters of control and shattering damage. By chilling their foes, they gain 'Fingers of Frost' procs that treat enemies as frozen, allowing for massive Ice Lance crits. Their gameplay is built around the Glacial Spike talent, a slow-building but devastatingly powerful ice boulder that can shatter a target's health bar in a single hit.",
        tier: "A",
        fullInfo: {
            titleInfo1: "Shatter 2.0 and Frostfire Convergence",
            info1: "Frost sees a major mechanical update with 'Shatter 2.0', which ensures that Frostbolt and Flurry always benefit from the Shatter crit bonus even if the target is CC-immune. The 'Frostfire' Hero Tree allows you to combine fire and ice, causing your Frostbolts to apply a stacking burn and your Flurry to deal increased damage to burning targets. This hybrid approach significantly boosts Frost's single-target damage, which was previously its main weakness compared to its elite AoE performance.",
            titleInfo2: "Glacial Spike and Crowd Control Mastery",
            info2: "Glacial Spike is now easier to cast thanks to a reduction in its base cast time and its synergy with 'Brain Freeze' procs, which now grant a 20% damage buff to your next Spike. Utility remains top-tier with 'Deep Freeze' returning as a talent choice for PvE, allowing Mages to stun priority targets. Survivability is also improved through 'Cryo-Freeze', which causes Ice Block to heal the Mage for 80% of their maximum health over its duration, making it a true reset button."
        }
    },
    {
        icon: "images/icons/afflictionWarlock.jpg",
        nameClass: "Warlock",
        especiality: "Affliction",
        rol: "DPS",
        description: "Affliction Warlocks deal damage by weaving together multiple curses and soul-rotting spells. The gameplay revolves around Soul Shards and Malefic Rapture, which causes all your active Damage-over-Time effects to erupt simultaneously. It is a spec that rewards careful tracking of debuffs and excels at sustained, multi-target pressure across the entire battlefield.",
        tier: "S",
        fullInfo: {
            titleInfo1: "Soul Eater Integration and Malefic Rupture Rework",
            info1: "Affliction undergoes a major transformation with the 'Soul Eater' Hero Tree, where Malefic Rupture no longer just deals damage, but also harvests 'Soul Shards' from active DoTs to empower your next Unstable Affliction. The rotation is smoother as 'Vile Taint' and 'Phantom Singularity' have been decoupled from the same talent row, allowing for a build that excels in both heavy AoE and sustained single-target. The return of 'Soul Swap' as a more efficient tool allows for instant DoT application across multiple targets.",
            titleInfo2: "Withering Utility and Defensive Scaling",
            info2: "Utility is enhanced by the new 'Curse of Enfeeblement', which combines the effects of Weakness and Tongues into a single powerful debuff. Defensively, 'Soul Leech' has been buffed to provide a larger shield, and 'Unending Resolve' now grants immunity to silence effects for its duration. Additionally, 'Pact of Gluttony' allows Healthstones to be used twice per combat, significantly increasing the Warlock's personal and group survivability during progression."
        }
    },
    {
        icon: "images/icons/demonologyWarlock.jpg",
        nameClass: "Warlock",
        especiality: "Demonology",
        rol: "DPS",
        description: "Demonology Warlocks are the masters of the demonic horde. Instead of casting spells directly, they spend Soul Shards to summon Imps, Dreadstalkers, and massive Vilefiends to do their bidding. The spec builds up to a massive crescendo by summoning a Demonic Tyrant, which empowers all active minions, creating a massive wave of fel-powered destruction.",
        tier: "D",
        fullInfo: {
            titleInfo1: "Diabolist Summoning and Pit Lord Dominance",
            info1: "Demonology focuses on the 'Diabolist' Hero Tree, which introduces a cycle of 'Greater Demons'. Spending Soul Shards now progresses a ritual that eventually summons a Pit Lord to devastate your primary target. 'Doom' has been reworked into a passive proc from Hand of Gul'dan, causing an explosive burst after 20 seconds that generates three Wild Imps. This reduces the need for manual DoT tracking and allows the player to focus entirely on maintaining their demonic army and maximizing demonic core procs.",
            titleInfo2: "Demonic Command and Utility Buffs",
            info2: "The spec’s utility is bolstered by 'Demonic Gateway' now being instant-cast via talents, making it far more reactive in raid environments. 'Axe Toss' from the Felguard now grants a 10% damage increase to the target for 5 seconds, giving Demonology a mini-offensive window every 30 seconds. For defense, 'Soul Link' has been moved higher in the tree, ensuring that Demonology remains the tankiest DPS spec through constant damage sharing with its active minions."
        }
    },
    {
        icon: "images/icons/destructionWarlock.jpg",
        nameClass: "Warlock",
        especiality: "Destruction",
        rol: "DPS",
        description: "Destruction is the master of raw chaos and green fire. It relies on generating Soul Shard Fragments to unleash massive Chaos Bolts that always critically strike. With its simple but effective 'Havoc' mechanic, Destruction can duplicate its single-target burst onto a second target, making it a terrifying force in both raids and dual-target encounters.",
        tier: "C",
        fullInfo: {
            titleInfo1: "Hellcaller Flames and Chaos Bolt Precision",
            info1: "Destruction embraces the 'Hellcaller' Hero Tree, replacing 'Immolate' with 'Wither', a powerful Shadowflame DoT that increases the Critical Strike chance of Chaos Bolt. The 'Backdraft' mechanic has been improved to stack up to 4 times, allowing for rapid-fire Chaos Bolt windows that feel more impactful. A new talent, 'Avatar of Destruction', causes your Infernal to summon minor Blasphemy spawns that explode for fire damage, significantly increasing the value of your 2-minute cooldowns in AoE scenarios.",
            titleInfo2: "Ritual of Ruin and Control Utility",
            info2: "The 'Ritual of Ruin' mechanic has been simplified: after spending 15 Soul Shards, your next Chaos Bolt or Rain of Fire is free and instant, providing a huge burst of mobility and damage. Utility sees the addition of 'Shadowfury' now having a 5-yard larger radius, and 'Banish' being effective against a wider variety of Midnight’s void-based enemies. Defensively, 'Dark Pact' now scales its shield based on your total Stamina plus your current Soul Shard count, rewarding aggressive resource management."
        }
    },
    {
        icon: "images/icons/brewmasterMonk.jpg",
        nameClass: "Monk",
        especiality: "Brewmaster",
        rol: "Tank",
        description: "Brewmasters utilize the 'Stagger' mechanic, which converts a portion of incoming instant damage into a slow-ticking DoT. By drinking purifying and celestial brews, they can clear this damage or gain massive shields. This makes them the smoothest tanks to heal, as they rarely take spiked damage, instead smoothing it out into a manageable flow of energy.",
        fullInfo: {
            titleInfo1: "Master of Harmony and Stagger Efficiency",
            info1: "Brewmaster sees a significant shift with the 'Master of Harmony' Hero Tree, which allows you to store a portion of your healing and damage in a 'Vitality' pool, released through Purifying Blast. The spec's core defensive, Stagger, has been refined to be 10% more effective against magical damage baseline. The removal of 'Bonedust Brew' simplifies the rotation, shifting the focus back to Keg Smash and Blackout Kick as the primary drivers of cooldown reduction for your Brews.",
            titleInfo2: "Ox Stance and Celestial Utility",
            info2: "Utility is enhanced by the new 'Heightened Senses' talent, which increases the range of Leg Sweep and Paralysis by 5 yards. A new passive, 'Stance of the Ox', provides a small, constant absorption shield whenever you dodge an attack, making the spec's health pool much less 'spiky' during high-physical encounters. Additionally, Celestial Brew now grants a temporary 15% armor buff while active, further solidifying the Monk's physical mitigation niche."
        }
    },
    {
        icon: "images/icons/mistweaverMonk.jpg",
        nameClass: "Monk",
        especiality: "Mistweaver",
        rol: "Healer",
        description: "Mistweavers blend traditional casting with 'Fistweaving'—the act of healing through melee combat. By using Rising Sun Kick and Tiger Palm, they trigger Ancient Teachings to heal nearby allies. With the addition of Clouded Focus and Sheilun's Gift, they offer a versatile kit that can handle both massive single-target triage and sustained group-wide mists.",
        fullInfo: {
            titleInfo1: "Conduit of the Celestials and Fistweaving Synergy",
            info1: "Mistweavers gain massive throughput from the 'Conduit of the Celestials' Hero Tree, allowing them to channel the power of the four August Celestials for high-burst healing. 'Ancient Teachings of the Monastery' has been reworked to convert 150% of your damage into healing, making the 'Fistweaving' playstyle more viable in high-pressure raid windows. The management of Mana is also easier as 'Mana Tea' now grants a stack every time you use a Rising Sun Kick, encouraging a highly active playstyle.",
            titleInfo2: "Revival Buffs and Mobility Tools",
            info2: "Revival now dispels all targets and provides a 5-second window of immunity to the effects dispelled, making it a premier utility for the new void-debuff heavy encounters in Midnight. Mobility is addressed via 'Lighter than Air', a new talent that allows Roll to be used while mid-air for a triple-jump effect. Defensively, Life Cocoon's shield has been increased by 20%, and it now applies Renewing Mist to the target automatically upon breaking."
        }
    },
    {
        icon: "images/icons/windwalkerMonk.jpg",
        nameClass: "Monk",
        especiality: "Windwalker",
        rol: "DPS",
        description: "Windwalkers are highly mobile martial artists that follow the 'Combo Strikes' mastery, which rewards them for never using the same ability twice in a row. They possess some of the strongest AoE burst in the game through Fists of Fury and Spinning Crane Kick, combined with incredible utility like Ring of Peace and Touch of Death for finishing off low-health foes.",
        tier: "B",
        fullInfo: {
            titleInfo1: "Shado-Pan Techniques and Combo Mastery",
            info1: "Windwalker embraces the 'Shado-Pan' Hero Tree, introducing 'Flurry Strikes' that trigger after spending a specific amount of Energy, dealing physical damage in a rapid sequence. The mastery 'Combo Strikes' has been amplified, with a new talent called 'Sequenced Strikes' that increases the damage of the next ability by 10% for every unique ability used in a row. This rewards high-skill rotational discipline and makes the spec's sustained damage much more competitive without relying solely on cooldowns.",
            titleInfo2: "Touch of Death and Group Utility",
            info2: "Touch of Death has been reworked to no longer be a 'one-shot' button, but instead serves as a massive execute that grants 5 stacks of 'Tiger’s Fury' on a kill. Utility sees a big win with 'Windwalking Aura' now granting a 10% avoidance buff to the group in addition to movement speed. Defensively, 'Fortifying Brew' has its cooldown reduced by spending Chi, and 'Diffuse Magic' now reflects 25% of the absorbed damage back to the attacker, giving the Monk more offensive-defensive agency."
        }
    },
    {
        icon: "images/icons/balanceDruid.jpg",
        nameClass: "Druid",
        especiality: "Balance",
        rol: "DPS",
        description: "Balance Druids manipulate the power of the Sun and Moon. Their gameplay is centered on the Eclipse system, alternating between Lunar and Solar empowerment to fuel massive Starfall or Starsurge casts. They provide unique utility like Mark of the Wild and Innervate, making them a staple in any raid group looking for strong spread-AoE damage and stellar utility.",
        fullInfo: {
            titleInfo1: "Elune's Chosen and Astral Flow",
            info1: "Balance Druids embrace the 'Elune's Chosen' Hero Tree, which focuses on empowering Lunar Strike and Starfall with Arcane-Moon damage. The Eclipse system has been streamlined: entering an Eclipse now grants a flat 15% Haste bonus instead of variable mastery, making the rotation feel faster and more consistent. A new talent, 'Celestial Alignment: Supernova', causes your major cooldown to trigger a massive Astral explosion on all targets afflicted by your DoTs, significantly boosting your burst AoE potential.",
            titleInfo2: "Starfall Synergy and Defensive Utility",
            info2: "Utility is improved with 'Wild Mushroom' now serving as a reliable source of Astral Power and slow utility on a short cooldown. Starfall no longer has a target cap but deals reduced damage beyond 8 targets, keeping it elite for massive pulls. Defensively, 'Barkskin' now grants a small amount of Versatility while active, and 'Astral Influence' has been buffed to increase the range of your utility spells like Typhoon and Ursol's Vortex by an additional 5 yards."
        }
    },
    {
        icon: "images/icons/feralDruid.jpg",
        nameClass: "Druid",
        especiality: "Feral",
        rol: "DPS",
        description: "Feral Druids are the complex masters of 'bleed' damage. By managing multiple Damage-over-Time effects like Rip and Rake, they wear enemies down before finishing them with ferocious bites. The spec rewards precise energy management and snapshotting mechanics, offering a high-skill-ceiling playstyle for players who enjoy feline agility and surgical precision.",
        tier: "D",
        fullInfo: {
            titleInfo1: "Wildstalker Bleeds and Vine Infestation",
            info1: "Feral's identity as a bleed-focused spec is reinforced by the 'Wildstalker' Hero Tree, where Rip and Rake have a chance to grow 'Bloodseeker Vines' on the target. These vines deal periodic Nature damage and explode when the target dies, spreading bleeds to nearby enemies. The energy economy is more forgiving as 'Tiger's Fury' now restores a flat 50 Energy upon use, and the 'Berserk' rework ensures that Shred and Rake deal their full damage as if you were in Stealth for the entire duration.",
            titleInfo2: "Apex Predators and Mobility Buffs",
            info2: "The 'Apex Predator's Craving' talent has been moved to a more accessible spot in the tree, allowing for more frequent free Ferocious Bites. Utility-wise, 'Stampeding Roar' now has its cooldown reduced when you spend Combo Points, providing the group with high-uptime mobility. Defensively, 'Survival Instincts' now has a shorter 2-minute cooldown, and 'Predatory Swiftness' allows Regrowth to be cast in Cat Form with a 20% increased critical heal chance."
        }
    },
    {
        icon: "images/icons/guardianDruid.jpg",
        nameClass: "Druid",
        especiality: "Guardian",
        rol: "Tank",
        description: "Guardian Druids are massive health sponges that rely on armor and high health pools to survive. By maintaining Ironfur and using Frenzied Regeneration, they can withstand enormous amounts of damage. The spec is famous for its reliability, offering a sturdy tanking experience with exceptional crowd control via Incapacitating Roar and Ursol's Vortex.",
        fullInfo: {
            titleInfo1: "Druid of the Claw and Physical Mitigation",
            info1: "Guardian Druids excel with the 'Druid of the Claw' Hero Tree, which emphasizes 'Ravage', an empowered version of Maul that also reduces the target's damage dealt. Ironfur stacking is more efficient as its duration has been increased to 8 seconds, and 'Afterthewild' provides a massive armor boost after casting Frenzied Regeneration. The rotation feels 'meatier' with Mangle now generating more Rage, allowing for a higher uptime on active mitigation during dense physical damage windows.",
            titleInfo2: "Lunar Beam and Group Sustain",
            info2: "Utility is bolstered by 'Lunar Beam' becoming a baseline choice for Guardian, providing both a powerful self-heal and a 10% damage reduction for the party within its area. 'Incapacitating Roar' now has a larger radius and also slows enemies by 50% after the disorient ends. Additionally, 'Mark of the Wild' has been buffed to provide a small amount of Avoidance, further cementing the Druid's role as a vital raid-wide defensive support."
        }
    },
    {
        icon: "images/icons/restorationDruid.jpg",
        nameClass: "Druid",
        especiality: "Restoration",
        rol: "Healer",
        description: "Restoration Druids are the masters of Healing-over-Time. By coating the party in Rejuvenations and Wild Growths, they preemptively counter damage. Their gameplay thrives in high-movement encounters, as most of their core kit is instant-cast, allowing them to remain mobile while keeping the group stable with the unstoppable power of nature's growth.",
        fullInfo: {
            titleInfo1: "Keeper of the Grove and Grove Guardian Synergy",
            info1: "Restoration's healing is now anchored by the 'Keeper of the Grove' Hero Tree, which focuses on 'Grove Guardians' (treants). These treants now cast a mini-Wild Growth upon being summoned and prioritize targets with Rejuvenation. The 'Mastery: Harmony' effect has been simplified to provide a flat bonus per HoT, and 'Swiftmend' no longer consumes a HoT if used within a 'Soul of the Forest' window, allowing for much more efficient and powerful burst healing setups.",
            titleInfo2: "Nature's Swiftness and Utility Control",
            info2: "Mana management is improved through 'Abundance', which now also reduces the mana cost of Wild Growth. Utility sees a big win with 'Cyclone' having its cast time reduced by 0.2 seconds in the class tree, and 'Nature's Swiftness' now has two charges. Defensively, Restoration Druids gain 'Ursine Vigor', providing a massive health and armor boost for 4 seconds after shifting into Bear Form, making it an essential 'wall' for surviving heavy boss mechanics."
        }
    },
    {
        icon: "images/icons/havocDemonHunter.jpg",
        nameClass: "Demon Hunter",
        especiality: "Havoc",
        rol: "DPS",
        description: "Havoc Demon Hunters are the kings of mobility and burst AoE. They utilize Fury to unleash Eye Beams and Blade Dances, weaving in and out of the fight with Vengeful Retreat and Fel Rush. Their gameplay revolves around 'Metamorphosis,' where they transform into a demon, gaining massive Haste and Leech to tear through enemies with fel-fueled rage.",
        tier: "A",
        fullInfo: {
            titleInfo1: "Aldrachi Reaping and Soul Fragment Synergy",
            info1: "Havoc transitions into a more technical playstyle with the 'Aldrachi Reaver' Hero Tree. Chaos Strike and Blade Dance now have a chance to shatter 'Aldrachi Soul Fragments', which, when consumed, empower your next finisher to deal massive Chaos damage and refund Fury. The reliance on 'Momentum' has been slightly reduced, as the new 'Art of the Glaive' talent provides a static damage buff after using Vengeful Retreat, making the rotation less frantic but more rewarding for precise ability sequencing.",
            titleInfo2: "Inertia Management and Defensive Agility",
            info2: "Utility is enhanced by 'Chaos Nova' now having its cooldown reduced for every enemy stunned, making it a powerhouse in Mythic+. Defensively, 'Netherwalk' has been moved to a more accessible talent node and now allows for 50% movement speed while active. Additionally, 'Blur' provides a temporary 10% increase to Leech, allowing Havoc to sustain through heavy damage windows as long as they maintain their offensive pressure."
        }
    },
    {
        icon: "images/icons/vengeanceDemonHunter.jpg",
        nameClass: "Demon Hunter",
        especiality: "Vengeance",
        rol: "Tank",
        description: "Vengeance Demon Hunters utilize soul fragments to heal and fuel their Sigils of power. They are the most mobile tanks, able to leap across the battlefield with Infernal Strike. By branding enemies with Fiery Brand and maintaining Spikes, they reduce damage while dealing significant fire damage back to all nearby targets.",
        fullInfo: {
            titleInfo1: "Fel-Scarred Transformation and Sigil Dominance",
            info1: "Vengeance gains incredible burst mitigation from the 'Fel-Scarred' Hero Tree, which causes Metamorphosis to trigger 'Demonic Intensity', dealing fire damage to all nearby enemies and granting a massive armor boost. Sigils are now more central than ever; 'Sigil of Flame' generates additional Fury per target hit, and 'Abyssal Strike' has been redesigned to reset the cooldown of your Sigils upon a successful Infernal Strike. This creates a high-uptime control loop that excels at gathering and locking down large packs.",
            titleInfo2: "Soul Cleave Rework and Group Utility",
            info2: "Soul Cleave now deals 20% more damage for each Soul Fragment consumed, reinforcing its role as both a primary heal and a heavy-hitting spender. Utility is bolstered by 'Sigil of Silence' now having two charges through the 'Sigil Mastery' talent. For group support, 'Chaos Brand' has been buffed to also increase the magic damage dealt by the Demon Hunter's fire-based sigils, ensuring the tank contributes significantly to the group's overall damage profile."
        }
    },
    {
        icon: "images/icons/augmentationEvoker.jpg",
        nameClass: "Evoker",
        especiality: "Augmentation",
        rol: "Support",
        description: "Augmentation is a revolutionary 'Support-DPS' spec that focuses on magnifying the power of the party. By maintaining high uptime on Ebon Might and utilizing Breath of Eons, they turn their allies into gods. This spec rewards players with deep game knowledge, as its value scales directly with the performance of their teammates, making it an essential slot in high-end compositions.",
        fullInfo: {
            titleInfo1: "Chronowarden Mastery and Temporal Buffs",
            info1: "Augmentation deepens its support role through the 'Chronowarden' Hero Tree, where Ebon Might now triggers 'Reverberations' that extend the duration of your buffs based on your Empower spells. The rotation is more fluid as 'Upheaval' and 'Breath of Eons' have better synergy; using one now grants 'Temporal Insight', reducing the cast time of your next Empowered ability. This ensures that the Evoker can maintain high uptime on group-wide damage buffs even during high-movement phases.",
            titleInfo2: "Spatial Utility and Defensive Rewind",
            info2: "Utility is enhanced by 'Spatial Paradox', which now also grants a small movement speed bonus to the healed target. A new talent, 'Interdimensional Swap', allows Rescue to be used on two allies at once, though on a longer cooldown. Defensively, 'Rewind' has been buffed to recover 50% of damage taken in the last 5 seconds (up from 40%), and 'Obsidian Scales' now provides a 15% increase to all healing received while active."
        }
    },
    {
        icon: "images/icons/devastationEvoker.jpg",
        nameClass: "Evoker",
        especiality: "Devastation",
        rol: "DPS",
        description: "Devastation is a fast-paced, mid-range caster that utilizes the 'Empower' mechanic to unleash devastating elemental attacks. Its gameplay revolves around the Dragonrage window, where players aim to extend their burst by perfectly timing their Red and Blue spells. With incredible mobility through Hover and the ability to deal massive 'Deep Breath' damage, it is a truly explosive spec.",
        tier: "A",
        fullInfo: {
            titleInfo1: "Ruby Adept and Explosive Essence Spend",
            info1: "Devastation gains explosive power from the 'Ruby Adept' Hero Tree, focusing on 'Red Essence' procs. Disintegrate now has a chance to trigger 'Molten Flare', an instant-cast Fire Breath that doesn't consume its cooldown. The 'Dragonrage' window has been simplified: it now grants a flat 20% increased Critical Strike chance and causes all Essence spenders to hit an additional target. This makes the spec a powerhouse for priority-target cleave and high-burst AoE encounters.",
            titleInfo2: "Hover Mobility and Hovering Utility",
            info2: "Mobility remains the spec's strongest asset; 'Hover' now has a third charge via talents and grants immunity to slows for its duration. Utility sees the addition of 'Heavy Wingbeat', causing Tail Swipe to knock enemies further and apply a 4-second daze. For survival, 'Renewing Blaze' has been reworked to also grant a small absorption shield based on the damage healed, giving the Evoker more effective health during lethal boss mechanics."
        }
    },
    {
        icon: "images/icons/preservationEvoker.jpg",
        nameClass: "Evoker",
        especiality: "Preservation",
        rol: "Healer",
        description: "Preservation is a highly innovative healer that uses the concept of 'Temporal' and 'Dream' magic. It excels at burst healing through Echo, allowing the Evoker to duplicate their next healing spell. While its shorter range requires better positioning, its ability to rewind damage taken with Rewind and provide massive mobility makes it a top-tier choice for group play.",
        fullInfo: {
            titleInfo1: "Flameshaper Reversion and Life-Giving Embers",
            info1: "Preservation utilizes the 'Flameshaper' Hero Tree to turn its offensive fire spells into reactive healing. 'Engulf' now consumes a portion of your Dream Breath or Reversion on a target to instantly heal them for a massive amount, making it the perfect 'spot-healing' tool. The interaction between 'Echo' and 'Spiritbloom' has been buffed, allowing Echoes to duplicate 70% of the primary heal, significantly increasing the spec's efficiency in spread-out raid groups.",
            titleInfo2: "Emerald Dream Utility and Stasis Precision",
            info2: "Utility is bolstered by 'Dream Flight' now leaving a trail of 'Emerald Mist' that reduces incoming damage for allies by 10%. 'Stasis' has been improved with a new UI tracker that shows exactly which spells are stored, reducing the chance of accidental overrides. Defensively, 'Zephyr' now provides a 30% area-of-effect damage reduction for the party, and 'Golden Hour' has been moved to the class tree, allowing Preservation to be more resilient against predictable burst damage."
        }
    }
];
let currentView = "home";
let currentRoleFilter = "all";

function createClassCards(list) {
    const boxClass = document.getElementById("boxClass");
    if (!boxClass) return;

    boxClass.innerHTML = list.map((item, index) => `
        <div class="cardClass">
            <div class="preInfo">
                <img src="${item.icon}" alt="${item.nameClass}"loading="lazy">
                <h3 class="className">
                    <span class="specName">${item.especiality} ${item.nameClass}</span>
                </h3>
            </div>
            <div class="fullInfo">
                <p class="classInfo">${item.description}</p>
                <button class="btnShowMore" data-index="${index}">Show more</button>
            </div>
        </div>
    `).join("");

    boxClass.querySelectorAll(".preInfo").forEach(header => {
        header.onclick = () => {
            header.closest(".cardClass").classList.toggle("is-expanded");
        };
    });

    boxClass.querySelectorAll(".btnShowMore").forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();

            const index = btn.dataset.index;
            const item = list[index];

            boxClass.innerHTML = `
                <div class="moreInfoView">
                    <button id="btnBack">Go Back</button>
                    <div class="content">
                        <h2>Guia for ${item.nameClass} ${item.especiality}</h2>
                        <h3>${item.fullInfo.titleInfo1}</h3>
                        <p>${item.fullInfo.info1}</p>
                        <h3>${item.fullInfo.titleInfo2}</h3>
                        <p>${item.fullInfo.info2}</p>
                    </div>
                </div>
            `;

            document.getElementById("btnBack").onclick = () => {
                if (currentView === "tier") {
                    showTierList(listClass);
                } else {
                    applyHomeFilters();
                }
            };
        };
    });
}

function applyHomeFilters() {
    let filtered = listClass;

    if (currentRoleFilter !== "all") {
        filtered = listClass.filter(item => item.rol === currentRoleFilter);
    }

    createClassCards(filtered);
}
function showTierList(list) {
    const boxClass = document.getElementById("boxClass");
    if (!boxClass) return;

    const tierOrder = ["S", "A", "B", "C", "D"];
    const tierGroups = { S: [], A: [], B: [], C: [], D: [] };

    list.forEach(item => {
        if (item.tier && tierGroups[item.tier]) {
            tierGroups[item.tier].push(item);
        }
    });

    boxClass.innerHTML = "";

    tierOrder.forEach(tier => {
        if (tierGroups[tier].length === 0) return;

        const tierBlock = document.createElement("div");
        tierBlock.className = `tierBlock tier-${tier}`;

        tierBlock.innerHTML = `
            <div class="tierHeader">${tier}</div>
            <div class="tierContent"></div>
        `;

        const tierContent = tierBlock.querySelector(".tierContent");

        tierGroups[tier].forEach((item, index) => {
            tierContent.innerHTML += `
                <div class="cardClass">
                    <div class="preInfo">
                        <img src="${item.icon}" alt="${item.nameClass}" loading="lazy">
                        <h3 class="className">
                            <span class="specName">${item.especiality} ${item.nameClass}</span>
                        </h3>
                    </div>
                    <div class="fullInfo">
                        <p class="classInfo">${item.description}</p>
                        <button class="btnShowMore" data-tier="${tier}" data-index="${index}">Show more</button>
                    </div>
                </div>
            `;
        });

        boxClass.appendChild(tierBlock);
    });

    boxClass.querySelectorAll(".preInfo").forEach(header => {
        header.onclick = () => {
            header.closest(".cardClass").classList.toggle("is-expanded");
        };
    });

    boxClass.querySelectorAll(".btnShowMore").forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();

            const tier = btn.dataset.tier;
            const index = btn.dataset.index;
            const item = tierGroups[tier][index];

            boxClass.innerHTML = `
                <div class="moreInfoView">
                    <button id="btnBack">Go Back</button>
                    <div class="content">
                        <h2>Guia for ${item.nameClass} ${item.especiality}</h2>
                        <h3>${item.fullInfo.titleInfo1}</h3>
                        <p>${item.fullInfo.info1}</p>
                        <h3>${item.fullInfo.titleInfo2}</h3>
                        <p>${item.fullInfo.info2}</p>
                    </div>
                </div>
            `;

            document.getElementById("btnBack").onclick = () => showTierList(listClass);
        };
    });
}

window.onload = () => {

    const savedFilter = localStorage.getItem("wowFilter");
    if (savedFilter) {
        currentRoleFilter = savedFilter;
    }

    updateTopUI();
    applyHomeFilters();
    updateMainViews();

    document.querySelectorAll(".filterBtn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.dataset.role === currentRoleFilter) {
            btn.classList.add("active");
        }
    });
    document.querySelectorAll(".filterBtn").forEach(btn => {
        btn.onclick = () => {
            currentRoleFilter = btn.dataset.role;

            localStorage.setItem("wowFilter", currentRoleFilter);

            document.querySelectorAll(".filterBtn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            if (currentView === "home") {
                applyHomeFilters();
            }
        };
    });

    const btnHome = document.getElementById("btnHome");
    if (btnHome) {
        btnHome.onclick = (e) => {
            e.preventDefault();
            currentView = "home";
            updateTopUI();
            updateMainViews();
            applyHomeFilters();
        };
    }

    const btnTierList = document.getElementById("btnTierList");
    if (btnTierList) {
        btnTierList.onclick = (e) => {
            e.preventDefault();
            currentView = "tier";
            updateTopUI();
            updateMainViews();
            showTierList(listClass);
        };
    }

    const btnGuild = document.getElementById("btnGuild");
    if (btnGuild) {
        btnGuild.onclick = (e) => {
            e.preventDefault();
            currentView = "guild";
            updateTopUI();
            updateMainViews();
            showTierList(listClass);
        };
    }
};


function updateTopUI() {
    const title = document.getElementById("titleBoxClass");
    const filters = document.getElementById("filtersBar");

    if (currentView === "tier") {
        if (title) title.textContent = "Tier List";
        if (filters) filters.style.display = "none";
    }
    else if (currentView === "guild") {
        if (title) title.textContent = "Guild Finder";
        if (filters) filters.style.display = "none";
    }
    else {
        if (title) title.textContent = "All especialities";
        if (filters) filters.style.display = "flex";
    }
}

function updateMainViews() {
    const classView = document.getElementById("boxClass");
    const guildView = document.getElementById("guildView");

    if (currentView === "guild") {
        classView.style.display = "none";
        guildView.style.display = "flex";
    }
    else {
        classView.style.display = "grid";
        guildView.style.display = "none";

        if (currentView === "tier") {
            classView.classList.add("tierMode");
        } else {
            classView.classList.remove("tierMode");
        }
    }
}
let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

document.getElementById("currentYear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = 'Last modified: ' + lastModified;
const wowForm = document.getElementById('guildSearchForm');

wowForm.addEventListener('input', () => {
    const formData = {
        guildName: document.getElementById('guildName').value,
        realmName: document.getElementById('realmName').value,
        region: document.getElementById('region').value
    };

    localStorage.setItem('wowGuildSearch', JSON.stringify(formData));
});

window.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('wowGuildSearch');

    if (savedData) {
        const data = JSON.parse(savedData);

        document.getElementById('guildName').value = data.guildName || '';
        document.getElementById('realmName').value = data.realmName || '';
        document.getElementById('region').value = data.region || 'us';
    }
});
document.querySelectorAll(".filterBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        currentRoleFilter = btn.dataset.role;

        localStorage.setItem("wowFilter", currentRoleFilter);

        document.querySelectorAll(".filterBtn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        if (currentView === "home") {
            applyHomeFilters();
        }
    });
});

