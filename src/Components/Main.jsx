import React from 'react'
import Feature from './Content/Feature';
import Category from './Content/Category'
import FeatureProducts from './Content/FeatureProducts'

export default function Main() {
    return (
        <div id = "main">
            <Feature  />
            <Category />
            <FeatureProducts />
        </div>
    )
}
