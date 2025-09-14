const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up MERN E-Commerce application...\n');

// Function to copy example env files
function setupEnvFiles() {
    const envConfigs = [
        {
            example: 'e-commerce-backend/.env.example',
            target: 'e-commerce-backend/.env'
        },
        {
            example: 'e-commerce-frontend/.env.example',
            target: 'e-commerce-frontend/.env'
        },
        {
            example: 'e-commerce-admin/.env.example',
            target: 'e-commerce-admin/.env'
        }
    ];

    envConfigs.forEach(config => {
        if (!fs.existsSync(config.target) && fs.existsSync(config.example)) {
            fs.copyFileSync(config.example, config.target);
            console.log(`✅ Created ${config.target}`);
        } else if (fs.existsSync(config.target)) {
            console.log(`⚠️  ${config.target} already exists, skipping...`);
        } else {
            console.log(`❌ ${config.example} not found`);
        }
    });
}

// Function to create upload directory
function createUploadDirectory() {
    const uploadDir = 'e-commerce-backend/upload/images';
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
        console.log(`✅ Created upload directory: ${uploadDir}`);
    } else {
        console.log(`⚠️  Upload directory already exists: ${uploadDir}`);
    }
}

// Main setup function
function main() {
    try {
        console.log('📋 Setting up environment files...');
        setupEnvFiles();
        
        console.log('\n📁 Creating necessary directories...');
        createUploadDirectory();
        
        console.log('\n🎉 Setup completed successfully!');
        console.log('\n📝 Next steps:');
        console.log('1. Make sure MongoDB is running on your system');
        console.log('2. Update the environment variables in the .env files if needed');
        console.log('3. Run "npm run install-all" to install all dependencies');
        console.log('4. Run "npm run dev" to start all services');
        console.log('\n💡 For more information, check the README.md file');
        
    } catch (error) {
        console.error('❌ Error during setup:', error.message);
        process.exit(1);
    }
}

main();
