import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-8">Landing Page</h1>
      
      {/* Button Variations Section */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Button Variations</h2>
        
        <div className="flex flex-wrap gap-4 mb-6">
          {/* Size Variations */}
          <div className="space-y-4">
            <h3 className="font-medium">Sizes:</h3>
            <Button title="Small" size="small" onClick={handleClick} />
            <Button title="Medium" size="medium" onClick={handleClick} />
            <Button title="Large" size="large" onClick={handleClick} />
          </div>
          
          {/* Shape Variations */}
          <div className="space-y-4">
            <h3 className="font-medium">Shapes:</h3>
            <Button title="Rounded Small" shape="rounded-sm" />
            <Button title="Rounded Medium" shape="rounded-md" />
            <Button title="Rounded Full" shape="rounded-full" />
          </div>
          
          {/* Combined Variations */}
          <div className="space-y-4">
            <h3 className="font-medium">Combined:</h3>
            <Button 
              title="Small & Full" 
              size="small" 
              shape="rounded-full" 
            />
            <Button 
              title="Large & Sharp" 
              size="large" 
              shape="rounded-sm"
              className="hover:bg-blue-700"
            />
          </div>
        </div>
        
        {/* Custom Buttons */}
        <div className="space-x-4">
          <Button 
            title="Primary Action" 
            size="large" 
            shape="rounded-full"
            className="bg-green-500 hover:bg-green-600"
          />
          <Button 
            title="Danger Action" 
            size="medium" 
            shape="rounded-md"
            className="bg-red-500 hover:bg-red-600"
          />
        </div>
      </div>
      
      {/* Existing Card Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Landing
