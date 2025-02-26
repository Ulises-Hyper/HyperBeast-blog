<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;


class NewsletterConfirmation extends Mailable
{

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function build()
    {
        return $this->view('emails.newsletter_confirmation')
                    ->subject('¡Gracias por suscribirte a nuestra Newsletter!');
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
