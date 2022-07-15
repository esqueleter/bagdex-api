import { Either } from "../../../core/shared/either"
import { InvalidNameError } from "../../../core/domain/entities/errors/invalid-name"
import { InvalidUrlError } from "../../../core/domain/entities/errors/invalid-url"
import { TierAlreadyExistsError } from "../use-cases/create-tier/errors/tier-already-exists-erros"
import { Tier } from "../domain/entities/tier"

export type CreateTierResponseDTO = Either< 
    | InvalidNameError
    | InvalidUrlError 
    | TierAlreadyExistsError, 
    Tier
>