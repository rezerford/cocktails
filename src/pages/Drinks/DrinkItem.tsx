import ComponentCard from "../../components/common/ComponentCard";
import LazyLoad from 'react-lazyload';
import * as React from "react";

type DrinkItemType = {
    dateModified: string;
    idDrink: string;
    strAlcoholic: string;
    strCategory: string;
    strCreativeCommonsConfirmed: string;
    strDrink: string;
    strDrinkAlternate: string | null;
    strDrinkThumb: string;
    strGlass: string;
    strIBA: string;
    strImageAttribution: string;
    strImageSource: string | null;
    strIngredient1: string | null;
    strIngredient2: string | null;
    strIngredient3: string | null;
    strIngredient4: string | null;
    strIngredient5: string | null;
    strIngredient6: string | null;
    strIngredient7: string | null;
    strIngredient8: string | null;
    strIngredient9: string | null;
    strIngredient10: string | null;
    strIngredient11: string | null;
    strIngredient12: string | null;
    strIngredient13: string | null;
    strIngredient14: string | null;
    strIngredient15: string | null;
    strInstructions: string;
    strInstructionsDE: string;
    strInstructionsES: string;
    strInstructionsFR: string;
    strInstructionsIT: string;
    strMeasure1: string | null;
    strMeasure2: string | null;
    strMeasure3: string | null;
    strMeasure4: string | null;
    strMeasure5: string | null;
    strMeasure6: string | null;
    strMeasure7: string | null;
    strMeasure8: string | null;
    strMeasure9: string | null;
    strMeasure10: string | null;
    strMeasure11: string | null;
    strMeasure12: string | null;
    strMeasure13: string | null;
    strMeasure14: string | null;
    strMeasure15: string | null;
    strTags: string;
    strVideo: string | null;
}

interface DrinkItemComponent {
    drink: DrinkItemType;
    menu?: string;
}

const DrinkItem: React.FC<DrinkItemComponent> = ({ drink } : any) => {
    const ingredients: any[] = [];
    for(let n = 1; n < 15; n += 1) {
        if(!drink[`strMeasure${n}`]) break;

        ingredients.push(<p className="mt-2 text-gray-500">
            <strong className="font-medium text-gray-600">{ drink[`strMeasure${n}`] }</strong>
            <span className="pl-2">{ drink[`strIngredient${n}`] }</span>
        </p>)
    }

    return (
        <ComponentCard>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div className="grid grid-cols-1 grid-rows-1" key={drink.idDrink}>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        { drink.strDrink }
                    </h2>
                    <dl className="grid grid-cols-1 gap-x-6 sm:grid-cols-1 lg:gap-x-8">
                        <div className="pt-4">
                            <dt className="font-medium text-gray-900">Category</dt>
                            <dd className="mt-2 text-sm text-gray-500">{ drink.strCategory }</dd>
                        </div>
                        <div className="pt-4">
                            <dt className="font-medium text-gray-900">Alcoholic/Non Alcoholic</dt>
                            <dd className="mt-2 text-sm text-gray-500">{ drink.strAlcoholic }</dd>
                        </div>
                        <div className="pt-4">
                            <dt className="font-medium text-gray-900">Glass</dt>
                            <dd className="mt-2 text-sm text-gray-500">{ drink.strGlass }</dd>
                        </div>
                    </dl>
                    <strong className="mt-4 font-medium text-gray-900">
                        Instructions:
                    </strong>
                    <p className="mt-2 text-gray-500">
                        { drink.strInstructions }
                    </p>

                    <strong className="mt-4 font-medium text-gray-900">
                        List of ingredients:
                    </strong>
                    { ingredients }
                </div>
                <div className="grid grid-cols-1 grid-rows-1">
                    <LazyLoad height={200}>
                        <img src={ drink.strDrinkThumb }
                         alt=""
                         className="rounded-lg bg-gray-100" />
                    </LazyLoad>
                </div>
            </div>
        </ComponentCard>
    )
}

export default DrinkItem;
