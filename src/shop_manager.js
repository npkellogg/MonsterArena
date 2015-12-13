/* Author: Nic Johnson
 *
 * Title: ShopManager.js
 *
 * Description: manages the upgrade shop for 
 * 		MonsterArena
 * 
 *
 * History:
 * 		December 08, 2015: 
 *  		-Date Created
 */

module.exports = (function()
{
	function ShopManager()
	{
		/////////////////////////////////
		// Prints all debug statements //
		/////////////////////////////////
		this.DEBUG = true;

		///////////
		// Enums //
		///////////
		this.Upgrades = 
		{
			DOOR: 0,
			ATTACK: 1,
			HEALTH: 2,
			DEFENSE: 3,
			OTHER1: 4,
			OTHER2: 5,
		};
		Object.freeze(this.Upgrades);

		this.Strings = 
		{
			0: "DOOR",
			1: "ATTACK",
			2: "HEALTH",
			3: "DEFENSE",
			4: "OTHER1",
			5: "OTHER2",
		};
		Object.freeze(this.Strings);

		////////////////////////////////
		// Assignment of this to fix  //
		// scope stuff for event      //
		// handlers                   //
		////////////////////////////////
		var self = this;

		////////////////
		// Properties //
		////////////////
		this.currentSelected = undefined;
		this.currentUpgrade = undefined;
		this.totalGold = 0;


		//////////////////////
		// Hooks to the DOM //
		//////////////////////
		this.doorPlus = document.getElementById("Door_Plus");
		this.doorPlus.descText = "Adds another door.";
		this.doorPlus.selected = document.getElementById("Door_Selected");
		this.doorPlus.addEventListener("click", function(e)
		{
			self.DoorPlus();
		});

		this.attackPlus = document.getElementById("AttackCap_Plus");
		this.attackPlus.descText = "Increases attack cap.";
		this.attackPlus.selected = document.getElementById("Attack_Selected");
		this.attackPlus.addEventListener("click", function(e)
		{
			self.AttackPlus();
		});

		this.healthPlus = document.getElementById("HealthCap_Plus");
		this.healthPlus.descText = "Increases health cap.";
		this.healthPlus.selected = document.getElementById("Health_Selected");
		
		this.healthPlus.addEventListener("click", function(e)
		{
			self.HealthPlus();
		});

		this.defensePlus = document.getElementById("DefenseCap_Plus");
		this.defensePlus.descText = "Increases defense cap.";
		this.defensePlus.selected = document.getElementById("Defense_Selected");
		this.defensePlus.addEventListener("click", function(e)
		{
			self.DefensePlus();
		});

		this.otherOne = document.getElementById("Other1");
		this.otherOne.descText = "Desc of Other 1";
		this.otherOne.selected = document.getElementById("Other1_Selected");
		this.otherOne.addEventListener("click", function(e)
		{
			self.OtherOne();
		});

		this.otherTwo = document.getElementById("Other2");
		this.otherTwo.descText = "Desc of Other 2";
		this.otherTwo.selected = document.getElementById("Other2_Selected");
		this.otherTwo.addEventListener("click", function(e)
		{
			self.OtherTwo();
		});

		this.purchaseBtn = document.getElementById("Purchase_Button");
		this.purchaseBtn.addEventListener("click", function(e)
		{
			self.PurchaseBtn();
		});

		// =-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

		this.descriptionText = document.getElementById("Description_Text");
		
		this.goldText = document.getElementById('Gold_Text');
		this.doorText = document.getElementById('Door_Cost');
		this.attackText = document.getElementById('Attack_Cost');
		this.defenseText = document.getElementById('Defense_Cost');
		this.healthText = document.getElementById('Health_Cost');
		this.otherOneText = document.getElementById('Other1_Cost');
		this.otherTwoText = document.getElementById('Other2_Cost');

		this.SetGoldText();
	}

	ShopManager.prototype.SetGoldText = function()
	{	
		this.goldText.textContent = "Gold: " + this.totalGold;
	};

	ShopManager.prototype.SetDoorText = function () 
	{
		
	};


	ShopManager.prototype.SetStatsManagerDelegates = function(attack, defense, health)
	{
		if (this.DEBUG) { console.log("ShopManager: StatsManager delegates being set."); }
		this.increaseAttack = attack;
		this.increaseDefense = defense;
		this.increaseHealth = health;
	};

	ShopManager.prototype.DoorPlus = function() 
	{
		if (this.DEBUG) { console.log("ShopManager: Door Plus Clicked"); }
		this.descriptionText.textContent = this.doorPlus.descText;
		this.currentUpgrade = this.Upgrades.DOOR;
		if (this.currentSelected != undefined)
		{
			this.currentSelected.setAttribute("stroke-opacity", "0");
			this.currentSelected = this.doorPlus.selected;
			this.currentSelected.setAttribute("stroke-opacity", "100");
		}
		else
		{
			this.currentSelected = this.doorPlus.selected;
			this.currentSelected.setAttribute("stroke-opacity", "100");
		}
	};

	ShopManager.prototype.AttackPlus = function() 
	{
		if (this.DEBUG) { console.log("ShopManager: Attack Plus Clicked"); }
		this.descriptionText.textContent = this.attackPlus.descText;
		this.currentUpgrade = this.Upgrades.ATTACK;
		if (this.currentSelected != undefined)
		{
			this.currentSelected.setAttribute("stroke-opacity", "0");
			this.currentSelected = this.attackPlus.selected;
			this.currentSelected.setAttribute("stroke-opacity", "100");
		}
		else
		{
			this.currentSelected = this.attackPlus.selected;
			this.currentSelected.setAttribute("stroke-opacity", "100");
		}
	};

	ShopManager.prototype.HealthPlus = function() 
	{
		if (this.DEBUG) { console.log("ShopManager: Health Plus Clicked"); }
		this.descriptionText.textContent = this.healthPlus.descText;
		this.currentUpgrade = this.Upgrades.HEALTH;
		if (this.currentSelected != undefined)
		{
			this.currentSelected.setAttribute("stroke-opacity", "0");
			this.currentSelected = this.healthPlus.selected;
			this.currentSelected.setAttribute("stroke-opacity", "100");
		}
		else
		{
			this.currentSelected = this.healthPlus.selected;
			this.currentSelected.setAttribute("stroke-opacity", "100");
		}
	};

	ShopManager.prototype.DefensePlus = function() 
	{
		if (this.DEBUG) { console.log("ShopManager: Defense Plus Clicked"); }
		this.descriptionText.textContent = this.defensePlus.descText;
		this.currentUpgrade = this.Upgrades.DEFENSE;
		if (this.currentSelected != undefined)
		{
			this.currentSelected.setAttribute("stroke-opacity", "0");
			this.currentSelected = this.defensePlus.selected;
			this.currentSelected.setAttribute("stroke-opacity", "100");
		}
		else
		{
			this.currentSelected = this.defensePlus.selected;
			this.currentSelected.setAttribute("stroke-opacity", "100");
		}
	};

	ShopManager.prototype.OtherOne = function() 
	{
		if (this.DEBUG) { console.log("ShopManager: Other1 Clicked"); }
		this.descriptionText.textContent = this.otherOne.descText;
		this.currentUpgrade = this.Upgrades.OTHER1;
		if (this.currentSelected != undefined)
		{
			this.currentSelected.setAttribute("stroke-opacity", "0");
			this.currentSelected = this.otherOne.selected;
			this.currentSelected.setAttribute("stroke-opacity", "100");
		}
		else
		{
			this.currentSelected = this.otherOne.selected;
			this.currentSelected.setAttribute("stroke-opacity", "100");
		}
	};

	ShopManager.prototype.OtherTwo = function() 
	{
		if (this.DEBUG) { console.log("ShopManager: Other2 Clicked"); }
		this.descriptionText.textContent = this.otherTwo.descText;
		this.currentUpgrade = this.Upgrades.OTHER2;
		if (this.currentSelected != undefined)
		{
			this.currentSelected.setAttribute("stroke-opacity", "0");
			this.currentSelected = this.otherTwo.selected;
			this.currentSelected.setAttribute("stroke-opacity", "100");
		}
		else
		{
			this.currentSelected = this.otherTwo.selected;
			this.currentSelected.setAttribute("stroke-opacity", "100");
		}
	};

	ShopManager.prototype.PurchaseBtn = function() 
	{
		if (this.DEBUG) { console.log("ShopManager: PurchaseBtn Clicked"); }
		console.log("Upgrade: " + this.Strings[this.currentUpgrade]);

		/* eslint-disable */
		switch (this.currentUpgrade)
		{
			case 0: // Door

				break;

			case 1: // Attack
				this.increaseAttack();
				break;

			case 2: // Health
				this.increaseHealth();
				break;

			case 3: // Defense
				this.increaseDefense();
				break;

			case 4: // Other1

				break;

			case 5: // Other2

				break;
		}
		/* eslint-enable */
	};


	return new ShopManager();

})();















