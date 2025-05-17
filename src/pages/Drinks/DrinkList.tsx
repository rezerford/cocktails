import { useState } from 'react';
import PageMeta from "../../components/common/PageMeta";
import { useParams } from 'react-router-dom';
import { Drinks } from "../../api/index.js";
import PageLoader from "../../components/ui/loader/Index";
import DrinkItem from "./DrinkItem";
import { useAsyncEffect } from "../../hooks";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDrink } from "../../store/actions/DrinkActions";

const DrinkList: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [drinks, setDrinks] = useState([]);
    const params: any = useParams();
    const cocktailCode: (never | string) = params.cocktailCode;
    const dispatch = useDispatch();
    const cacheDrinks = useSelector((state: any) => state.DrinkReducer.drinks);

    useAsyncEffect(
        {
            setIsLoading: setIsLoading,
            setData: setDrinks,
            asyncFunction: async () => {
                setIsLoading(true);
                try {
                    if(cacheDrinks && cacheDrinks.has(cocktailCode)) {
                        return cacheDrinks.get(cocktailCode);
                    }

                    const { drinks } = await Drinks.getDrinks({ cocktailCode });
                    dispatch(setDrink(cocktailCode, drinks));
                    return drinks;
                } catch (e) {
                    console.error(e);
                }
            },
        },
        [cocktailCode],
    );

    return (
        <div>
            <PageMeta
                title="List of drinks"
                description="Application Drink List"
            />
            {isLoading ? <PageLoader /> : (
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-1">
                    { drinks.map((item: any) => <DrinkItem drink={item}
                                                      key={item.idDrink}
                                            />)
                    }
                </div>
            )}
        </div>
    );
}

export default DrinkList;
