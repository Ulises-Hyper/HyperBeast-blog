<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateSubscriptionsTableForStripe extends Migration
{
    public function up()
    {
        Schema::table('subscriptions', function (Blueprint $table) {
            // Renombramos la columna
            $table->renameColumn('patreon_id', 'stripe_subscription_id');

            // Aseguramos que sea única (opcional pero recomendable)
            $table->string('stripe_subscription_id')->unique()->change();
        });
    }

    public function down()
    {
        Schema::table('subscriptions', function (Blueprint $table) {
            // Revertimos el cambio
            $table->renameColumn('stripe_subscription_id', 'patreon_id');

            // Quitamos la restricción unique si la agregaste
            $table->dropUnique(['stripe_subscription_id']);
        });
    }
}