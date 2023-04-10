import { Badge, Card } from 'flowbite-react'
import React from 'react'
import proyects from './proyects-data'

const badgeColors = [
    "info",
    "gray",
    "failure",
    "success",
    "warning",
    "indigo",
    "purple",
    "pink"
]

const list = () => {
  return (
    <div className="container text-sgl-gray mt-24 mb-24">
        <div className='grid grid-cols-3 max-lg:grid-cols-1 gap-4 container'>
            {
                proyects.map(({
                    title,
                    description,
                    skills,
                    image,
                    link
                }, key)=> (
                    <div className="max-w-sm" key={key}>
                        <Card imgSrc={image} href={link} target="_blank">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {title}
                            </h5>
                            <div className="flex flex-wrap gap-2">
                            {
                                skills.map((skill, key) => (
                                    <Badge color={badgeColors[key]} key={key}>
                                        {skill}
                                    </Badge>
                                ))
                            }
                            </div>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {description}
                            </p>
                        </Card>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default list