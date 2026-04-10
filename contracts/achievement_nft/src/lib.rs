#![no_std]

use soroban_sdk::{contract, contractimpl, symbol_short, Address, Env, Symbol};

const BADGE: Symbol = symbol_short!("BADGE");

#[contract]
pub struct AchievementNFT;

#[contractimpl]
impl AchievementNFT {

    // mint badge
    pub fn mint_badge(env: Env, user: Address, level: Symbol) {

        user.require_auth();

        env.storage()
            .instance()
            .set(&(BADGE, user.clone()), &level);

        env.events().publish(
            (symbol_short!("badge"),),
            (user, level)
        );
    }

    // get badge
    pub fn get_badge(env: Env, user: Address) -> Symbol {

        env.storage()
            .instance()
            .get(&(BADGE, user))
            .unwrap_or(symbol_short!("NONE"))
    }
}