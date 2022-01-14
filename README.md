# Stinky's Kittens and Doggies too

## Scenario
You run a pet adoption agency called "Stinky's Kittens and Doggies too" (I guess this makes you Stinky!).  You need a 
way of keeping track of pets that are up for adoption as well as applicants for each pet, so that you can best match 
each pet with its fur-ever person.  

You've been in the pet adoption business for a while, and you know that if a person adopts one animal, they're likely
to be willing to adopt a second animal.  For this reason, you also want to keep track of successful applicants' contact
info so that you have the option of reaching out in the future if you have a particularly hard to market pet (see 
[Prancer's story](https://www.boredpanda.com/funny-honest-adoption-post-prancer/?utm_source=google&utm_medium=organic&utm_campaign=organic) for more info on what a "hard to market" pet looks like).

## Stories

### Stinky can see the names of the pets up for adoption (completed already)
As Stinky, I want to know which pets I am trying to help get adopted.

**Given** there are pets available to adopt <br/>
**When** I (Stinky) navigate to the application <br/>
**Then** I see the name of each pet up for adoption

#### Stinky can see some basic info about each pet
As Stinky, I want to know some basic info about the animals up for adoption 
so that I'm well-informed when talking to potential fur-parents.  In particular,
I'd like to know...
- the animal's age in years
- whether the animal is a cat or a dog, and
- whether the animal would prefer to be the only pet in a household

**Given** there are pets available to adopt <br/>
  **When** I (Stinky) navigate to the application <br>
  **Then** I see the age, type (either cat or dog), and only-pet preference associated with each pet


#### Stinky can add new pets up for adoption
New animals are constantly coming in the door looking for their fur-ever home!
As Stinky, I want to be able to add new pets to the list of pets up for adoption.

#### Stinky can add applicants for pets

#### Stinky can approve applicants (choose them as the adopter)

#### Stinky does not have the ability to approve an applicant if their home doesn't meet the pet's preferences
Stinky is tired and frustrated.  Multiple pets are being returned to the adoption
agency because they do not get along with their adopter's already-owned pets.  As 
Stinky, I do not want to be able to grant approval for an adoption if the pet wants
to be an only-pet and the applicant already has pets at home.