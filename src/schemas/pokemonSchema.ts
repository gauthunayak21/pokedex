export interface unPatchedSchema {
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;
    is_default?: string;
    name?: string;
    sprites?: string;
}

export interface pokemonSpritesSchema {
    normal? : string;
    animated? : string;
}

export interface pokemonSchema {
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;
    is_default?: string;
    name?: string;
    sprites?: pokemonSpritesSchema;
}